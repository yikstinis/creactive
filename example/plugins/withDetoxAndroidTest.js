const fs = require('fs')
const path = require('path')

const { withAppBuildGradle, withDangerousMod, withProjectBuildGradle } = require('@expo/config-plugins')
const { mergeContents } = require('@expo/config-plugins/build/utils/generateCode')

const ANDROID_PACKAGE = 'com.creactive.example'

/**
 * Wires up Detox's Android instrumentation test entry point, which
 * `expo prebuild` has no built-in knowledge of. Without a testInstrumentationRunner
 * and a JUnit test that calls Detox.runTests(...), assembleAndroidTest happily builds
 * an empty test APK that never triggers Detox's WebSocket handshake with the app,
 * which is what "Detox can't seem to connect to the test app(s)!" actually means.
 * See https://wix.github.io/Detox/docs/introduction/project-setup (Android tab).
 */
module.exports = function withDetoxAndroidTest(config) {
  config = withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      // com.wix:detox isn't on Maven Central/Google's repo — the npm package ships its own
      // local file-based Maven repo, which needs to be added explicitly for the
      // androidTestImplementation('com.wix:detox:+') dependency below to resolve at all.
      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `    maven { url "\${rootDir}/../../node_modules/detox/Detox-android" }`,
        tag: 'detox-maven-repo',
        // anchors on the jitpack line specifically (not a bare "repositories {") since that
        // also appears in the unrelated buildscript{} block above allprojects{}
        anchor: /maven \{ url 'https:\/\/www\.jitpack\.io' \}/,
        offset: 1,
        comment: '//',
      }).contents
    }
    return config
  })

  config = withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      // The RN Gradle plugin skips JS bundling for any variant listed in debuggableVariants
      // (default: ['debug']), assuming a Metro dev server will serve the bundle at runtime
      // instead. Nothing starts Metro in CI, so the debug app has no way to get its JS — it
      // just times out trying to reach ws://10.0.2.2:8081. Emptying this list makes the debug
      // build embed its JS bundle like a release build would, which is what CI actually needs.
      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `    debuggableVariants = []`,
        tag: 'detox-bundle-debug-variant',
        anchor: /^react\s*\{/,
        offset: 1,
        comment: '//',
      }).contents

      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `        testBuildType System.getProperty('testBuildType', 'debug')
        testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'`,
        tag: 'detox-instrumentation-runner',
        anchor: /applicationId 'com\.creactive\.example'/,
        offset: 1,
        comment: '//',
      }).contents

      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        // com.wix:detox:+ transitively pulls an old androidx.test:core/runner/rules whose
        // InstrumentationActivityInvoker activities predate Android 12's mandatory
        // android:exported requirement; pinning newer versions here wins Gradle's
        // highest-version conflict resolution and fixes the manifest merge.
        newSrc: `    androidTestImplementation('com.wix:detox:+')
    androidTestImplementation('androidx.test:core:1.7.0')
    androidTestImplementation('androidx.test:runner:1.7.0')
    androidTestImplementation('androidx.test:rules:1.7.0')`,
        tag: 'detox-android-test-dependency',
        anchor: /^dependencies\s*\{/,
        offset: 1,
        comment: '//',
      }).contents
    }
    return config
  })

  return withDangerousMod(config, [
    'android',
    (config) => {
      const packagePath = ANDROID_PACKAGE.split('.').join('/')
      const dir = path.join(config.modRequest.platformProjectRoot, 'app/src/androidTest/java', packagePath)
      fs.mkdirSync(dir, { recursive: true })
      fs.writeFileSync(
        path.join(dir, 'DetoxTest.java'),
        `package ${ANDROID_PACKAGE};

import androidx.test.filters.LargeTest;
import androidx.test.rule.ActivityTestRule;
import androidx.test.runner.AndroidJUnit4;

import com.wix.detox.Detox;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {
    @Rule
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() {
        Detox.runTests(mActivityRule);
    }
}
`,
      )
      return config
    },
  ])
}

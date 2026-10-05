import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

import type { ConfigPlugin } from '@expo/config-plugins'
import { withAppBuildGradle, withDangerousMod, withProjectBuildGradle } from '@expo/config-plugins'
import { mergeContents } from '@expo/config-plugins/build/utils/generateCode'

const ANDROID_PACKAGE = 'com.creactive'

// `expo prebuild` doesn't set up Detox's instrumentation runner and JUnit entry point.
// Without them the test APK is empty and Detox fails with "Detox can't seem to connect to the test app(s)!".
// See https://wix.github.io/Detox/docs/introduction/project-setup (Android tab).
const withDetoxAndroidTest: ConfigPlugin = (config) => {
  config = withProjectBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      // com.wix:detox isn't published to Maven Central or Google's repo, so the local Maven repo shipped in the npm package is added.
      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        newSrc: `    maven { url "\${rootDir}/../node_modules/detox/Detox-android" }`,
        tag: 'detox-maven-repo',
        // Anchors on the jitpack line because a bare `repositories {` also matches the buildscript block.
        anchor: /maven \{ url 'https:\/\/www\.jitpack\.io' \}/,
        offset: 1,
        comment: '//',
      }).contents
    }
    return config
  })

  config = withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
      // The RN Gradle plugin skips JS bundling for debuggable variants, expecting Metro to serve the bundle.
      // CI runs no Metro, so the debug build has to embed its bundle like a release build.
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
        anchor: /applicationId 'com\.creactive'/,
        offset: 1,
        comment: '//',
      }).contents

      config.modResults.contents = mergeContents({
        src: config.modResults.contents,
        // com.wix:detox pulls old androidx.test libraries whose activities lack Android 12's required android:exported.
        // Pinning newer versions wins Gradle's conflict resolution and fixes the manifest merge.
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
      const dir = join(config.modRequest.platformProjectRoot, 'app/src/androidTest/java', packagePath)
      mkdirSync(dir, { recursive: true })
      writeFileSync(
        join(dir, 'DetoxTest.java'),
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

export default withDetoxAndroidTest

const fs = require('fs')
const path = require('path')

const { withAppBuildGradle, withDangerousMod } = require('@expo/config-plugins')
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
  config = withAppBuildGradle(config, (config) => {
    if (config.modResults.language === 'groovy') {
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
        newSrc: `    androidTestImplementation('com.wix:detox:+')`,
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

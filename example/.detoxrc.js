// Binary paths/build commands assume `expo prebuild` names the generated Xcode project/scheme
// "creactiveexample" (sanitized from app.json's "creactive-example") — confirmed for android;
// ios is unverified (no macOS available to build/run it outside of CI).
module.exports = {
  artifacts: {
    rootDir: 'artifacts',
    plugins: {
      log: 'failing',
      screenshot: 'failing',
      video: 'failing',
    },
  },
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: { setupTimeout: 120000 },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/creactiveexample.app',
      build:
        'xcodebuild -workspace ios/creactiveexample.xcworkspace -scheme creactiveexample -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      // -PreactNativeArchitectures=x86_64 matches the CI emulator's arch (visual-native.yml) and avoids
      // dexing/packaging native libs for the other 3 architectures for nothing, which was OOM-ing the
      // Gradle daemon. Revisit if this ever needs to build for a differently-arched local emulator.
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug -PreactNativeArchitectures=x86_64 --stacktrace && cd ..',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: { type: 'iPhone 15' },
    },
    emulator: {
      type: 'android.emulator',
      device: { avdName: 'Pixel_7_API_34' },
    },
  },
  configurations: {
    ios: { device: 'simulator', app: 'ios.debug' },
    android: { device: 'emulator', app: 'android.debug' },
  },
}

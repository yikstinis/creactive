// Assumes `expo prebuild` names the Xcode project and scheme "creactive" (from app.config.ts's slug).
// Verified on Android only; iOS can't be built locally without macOS.
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
      config: 'snapshot.detox.config.js',
    },
    jest: { setupTimeout: 120000 },
  },
  apps: {
    // Built as Release because the generated AppDelegate.swift always loads the bundle from Metro in Debug, even when one is embedded.
    // CI runs no Metro, and simulator builds need no code signing either way.
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/creactive.app',
      build:
        'xcodebuild -workspace ios/creactive.xcworkspace -scheme creactive -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      // Builds only x86_64 to match the CI emulator (visual-native.yml), since building all four architectures OOM'd the Gradle daemon.
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug -PreactNativeArchitectures=x86_64 --stacktrace && cd ..',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: { type: 'iPhone 17' },
    },
    emulator: {
      type: 'android.emulator',
      device: { avdName: 'Pixel_7_API_34' },
    },
  },
  configurations: {
    ios: { device: 'simulator', app: 'ios.release' },
    android: { device: 'emulator', app: 'android.debug' },
  },
}

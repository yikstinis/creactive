// TODO: Keep an eye on react-server-dom-webpack dependency!
// It do not supports our react version, wants react@19 at least (it is listed).
// It is a dependency of jest-expo and is used for renderToReadableStream call.
// Seems like react@19 is rendering for our web tests.
// We can't update to react@19 yet, because of the react-native-web dependency.
// It has no support for react@19 yet, but later we can update I guess!

// This file is used to setup tests that run in a native environment.
import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom'

expect.extend(matchers)

import type { WrapperComponent } from './wrapper.types'
// We don't need any wrapping on native platfrom.
export const Wrapper: WrapperComponent = ({ children }) => children

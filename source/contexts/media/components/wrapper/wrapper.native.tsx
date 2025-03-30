import type { WrapperComponent } from './wrapper.types'
// We don't need any wrapping on native platfrom.
const Wrapper: WrapperComponent = ({ children }) => children
export default Wrapper

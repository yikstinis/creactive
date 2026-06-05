import type { CSSProperties, JSX } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { Platform } from 'react-native'
import { WrapperProps } from './wrapper.types'

Platform.select({
  web: () => {
    if (globalThis.window) {
      // TODO: ...
    }
  },
})?.()

export const Wrapper = Platform.select({
  // We need a wrapper for hiding content blinking.
  // Server side rendered result is allways matching mobile media.
  // Client side effects may decide to render something different.
  // This wrapper helps us to handle this situation gracefully.
  web: function WrapperWeb({ children }: WrapperProps) {
    const [isHydrated, setHydrated] = useState(false)

    useEffect(() => {
      setHydrated(true)
    }, [])

    const style = useMemo<CSSProperties>(() => {
      const isVisible =
        isHydrated ||
        typeof window === 'undefined' ||
        typeof document === 'undefined'
      return {
        display: isVisible ? 'flex' : 'none',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
        flexDirection: 'column',
      }
    }, [isHydrated])

    return (
      <div
        id='creactive-media-wrapper'
        style={style}
        // We don't want to see hydration warning on this element.
        // We'll set display none in the script below.
        // This will allow us to hide wrapped content during first render.
        suppressHydrationWarning
      >
        <script
          // Hide wrapper content immediately during first render.
          dangerouslySetInnerHTML={{
            __html: 'document.currentScript.parentElement.style.display="none"',
          }}
        />

        {children}
      </div>
    )
  },
  // We don't need any wrapping on native platfrom.
  default: ({ children }: WrapperProps) => children as JSX.Element,
})

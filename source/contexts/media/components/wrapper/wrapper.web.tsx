import type { CSSProperties } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { WrapperComponent } from './wrapper.types'

// We need a wrapper for hiding content blinking.
// Server side rendered result is allways matching mobile media.
// Client side effects may decide to render something different.
// This wrapper helps us to handle this situation gracefully.
export const Wrapper: WrapperComponent = ({ children }) => {
  const ref = useRef<HTMLDivElement>()
  // Hydration flag, allows to detect server and first client render.
  const [isHydrated, setHydrated] = useState(false)
  // Update hydration flag after first render.
  useEffect(() => {
    setHydrated(true)
  }, [])
  // Memorized wrapper style.
  const style = useMemo(() => {
    // Return visible wrapper styles during hydrated client render.
    // Return visible wrapper styles during server side rendering also.
    if (
      isHydrated ||
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    ) {
      return {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
        flexDirection: 'column',
      }
    }
    // Return hidden wrapper styles during first client render.
    // Display style will be already modified by inline script to be onest.
    // But anyway, we want this object to be consistent with final state later.
    return {
      display: 'none',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%',
      flexDirection: 'column',
    }
  }, [isHydrated])

  return (
    <>
      <div
        ref={ref}
        style={style as CSSProperties}
        // We don't want to see hydration warning on this element.
        // We'll set display none in the script below.
        // This will allow us to hide wrapped content during first render.
        suppressHydrationWarning
      >
        {children}
      </div>

      <script
        // Hide wrapper content immediately during first render.
        // Effect above will show wrapper with media component effects applied.
        dangerouslySetInnerHTML={{
          __html: 'document.currentScript.previousSibling.style.display="none"',
        }}
      />
    </>
  )
}

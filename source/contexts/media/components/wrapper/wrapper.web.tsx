import { useEffect, useMemo, useRef } from 'react'
import type { WrapperComponent } from './wrapper.types'
// We need a wrapper for hiding content blinking.
// Server side rendered result is allways matching mobile media.
// Client side effects may decide to render something different.
// This wrapper helps us to handle this situation gracefully.
export const Wrapper: WrapperComponent = ({ children }) => {
  const ref = useRef<HTMLDivElement>()

  // We are on client and rendered something.
  // All media components also rendered their client side content.
  // We can show wrapped content without any blinking now.
  useEffect(() => {
    if (ref.current) {
      ref.current.style.display = 'flex'
    }
  }, [])

  // Memorized wrapper style.
  const style = useMemo(() => {
    // Return visible wrapper styles when rendering on server.
    if (typeof window === 'undefined') {
      return {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '100%',
      }
    }
    // Return hidden wrapper styles when rendering on client.
    // Display style will be already modified by inline script to be onest.
    // But anyway, we want this object to be consistent with final state later.
    return {
      display: 'none',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '100%',
    }
  }, [])

  return (
    <>
      <div
        ref={ref}
        style={style}
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

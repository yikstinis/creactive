/**
 * Splits a scene URL into a `sceneId` (every path segment but the last, rejoined with `/` - a
 * scene's own id is itself slash-separated, e.g. `component/view/padding`) and a `caseName` (the
 * last segment).
 *
 * A native deep link puts the first segment in the URL's host
 * (`creactive-example://component/view/padding/x6s`), while the web dev server's URL puts it in
 * the path (`http://localhost:6007/component/view/padding/x6s`) - so `http(s)` URLs have their
 * scheme and host stripped first, but any other scheme only has the `scheme://` prefix stripped,
 * leaving its host as the leading path segment. This is done with plain string ops rather than
 * the global `URL`: React Native's own polyfill (`Libraries/Blob/URL.js`) only recognizes
 * `http(s)` in its `hostname`/`pathname` getters, silently returning empty values for a
 * custom-scheme deep link instead of throwing.
 */
export function parseSceneRoute(url: string): { sceneId?: string; caseName?: string } {
  const schemeEnd = url.indexOf('://')
  const isHttp = url.startsWith('http://') || url.startsWith('https://')
  const afterScheme = schemeEnd === -1 ? '' : url.slice(schemeEnd + 3)

  const hostEnd = afterScheme.indexOf('/')
  const pathAndQuery = isHttp ? (hostEnd === -1 ? '' : afterScheme.slice(hostEnd)) : afterScheme
  const path = pathAndQuery.split(/[?#]/)[0]

  const segments = path.split('/').filter(Boolean)
  if (segments.length === 0) return {}
  if (segments.length === 1) return { sceneId: segments[0] }

  return { sceneId: segments.slice(0, -1).join('/'), caseName: segments[segments.length - 1] }
}

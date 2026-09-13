import { expect } from '@jest/globals'

import { parseSceneRoute } from '@/testing/route'

describe('@/testing/route', () => {
  describe('parseSceneRoute', () => {
    describe('web dev server URLs', () => {
      it('returns an empty object for the bare origin', () => {
        expect(parseSceneRoute('http://localhost:6007')).toEqual({})
      })

      it('returns an empty object for the root path', () => {
        expect(parseSceneRoute('http://localhost:6007/')).toEqual({})
      })

      it('returns just sceneId when it is the whole path', () => {
        expect(parseSceneRoute('http://localhost:6007/component')).toEqual({ sceneId: 'component' })
      })

      it('returns a slash-joined sceneId and a caseName', () => {
        expect(parseSceneRoute('http://localhost:6007/component/view/padding/x6s')).toEqual({
          sceneId: 'component/view/padding',
          caseName: 'x6s',
        })
      })

      it('ignores a trailing slash', () => {
        expect(parseSceneRoute('http://localhost:6007/component/view/padding/x6s/')).toEqual({
          sceneId: 'component/view/padding',
          caseName: 'x6s',
        })
      })

      it('ignores a query string and hash', () => {
        expect(parseSceneRoute('http://localhost:6007/component/view/padding/x6s?foo=bar#hash')).toEqual({
          sceneId: 'component/view/padding',
          caseName: 'x6s',
        })
      })

      it('works with https', () => {
        expect(parseSceneRoute('https://example.com/component/view/padding/x6s')).toEqual({
          sceneId: 'component/view/padding',
          caseName: 'x6s',
        })
      })
    })

    describe('native deep link URLs', () => {
      it('returns an empty object for the bare scheme', () => {
        expect(parseSceneRoute('creactive-example://')).toEqual({})
      })

      it('returns just sceneId when it is the whole path', () => {
        expect(parseSceneRoute('creactive-example://component')).toEqual({ sceneId: 'component' })
      })

      it('returns a slash-joined sceneId and a caseName', () => {
        expect(parseSceneRoute('creactive-example://component/view/padding/x6s')).toEqual({
          sceneId: 'component/view/padding',
          caseName: 'x6s',
        })
      })
    })
  })
})

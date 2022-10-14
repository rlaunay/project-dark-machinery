import { useEffect, useState } from 'react'

export default function useMediaQuery(query: string): boolean {
  const [isMatch, setIsMatch] = useState(window.matchMedia(query).matches)
  const [mediQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null)

  useEffect(() => {
    const list = window.matchMedia(query);
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [query])

  useEffect(() => {
    if (mediQueryList) {
      const handler = (ev: MediaQueryListEvent) => setIsMatch(ev.matches)
      mediQueryList.addEventListener('change', handler)

      return () => {
        mediQueryList.removeEventListener('change', handler)
      }
    }
  }, [mediQueryList])

  return isMatch
}

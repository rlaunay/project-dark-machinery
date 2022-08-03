import { useCallback, useEffect, useState } from 'react';

export function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

  const callback = useCallback((e: MediaQueryListEvent) => {
    setIsMatch(e.matches);
  }, []);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEffect(() => {
    if (mediaQueryList !== null) {
      mediaQueryList.addEventListener('change', callback)

      return () => mediaQueryList.removeEventListener('change', callback)
    }
  })

  return isMatch
}
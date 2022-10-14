import { RefObject, useEffect, useRef } from "react";

export default function useEventListenner<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void,
>(
  eventType: KW | KH,
  callback: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const targetElement: T | Window = element?.current || window
    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    const eventListener: typeof callback = event => callbackRef.current(event)
    targetElement.addEventListener(eventType, eventListener, options)

    return () => {
      targetElement.removeEventListener(eventType, eventListener)
    }
  }, [eventType, element, options])
}
import { useEffect, useRef } from "react";

export function useEventListener(
  eventName: keyof WindowEventMap | string,
  handler: (event: Event) => void,
  element: HTMLElement | typeof globalThis = globalThis
) {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current?.(event);

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

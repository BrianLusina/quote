/* eslint-disable @typescript-eslint/ban-types */
import { useRef, useEffect } from 'react';

export default function useInterval(callback: Function, delay?: number | null) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}

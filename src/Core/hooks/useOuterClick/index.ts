import { RefObject, useCallback, useEffect } from "react";

type Callback = () => void;
type UseOuterClick = (callback: Callback, ref: RefObject<HTMLElement>) => void;

/**
 * Takes an Element ref and callback function, calls the callback function if outside area of the ref is clicked.
 * @param {RefObject<HTMLElement>} ref HTML Element to be watched
 * @param {Function} callback Function to be called
 */
const useOuterClick: UseOuterClick = (callback, ref) => {
  const listener = (e: Event) => {
    if (ref.current && e.target && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  const handler = useCallback(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  useEffect(handler, [ref]);
};

export default useOuterClick;

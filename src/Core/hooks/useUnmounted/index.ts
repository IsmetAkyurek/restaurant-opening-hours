import { useEffect } from "react";

type UseUnmounted = (callback: () => void) => void;

/**
 * Takes a callback function as parameter and calls it once on unmounting.
 * @param {Function} callback Function to be called on initialization
 */
const useUnmounted: UseUnmounted = (callback) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
};

export default useUnmounted;

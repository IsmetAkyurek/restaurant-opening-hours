import { useEffect, useState } from "react";

type UseMounted = (callback: () => void) => void;

/**
 * Takes a callback function as parameter and calls it once on initialize.
 * @param {Function} callback Function to be called on initialization
 */
const useMounted: UseMounted = (callback) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      callback();
    }
  }, [mounted, callback]);
};

export default useMounted;

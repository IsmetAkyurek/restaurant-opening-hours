import { useState } from "react";
import useMounted from "Core/hooks/useMounted";

type Action<U> = () => Promise<U>;

type UseGetOptions = {
  initialLoad?: boolean;
};

/**
 * Takes a promise action and returns current data value, loading and error statuses along with the request function.
 * @param {Function} action Promise action
 * @param {UseGetOptions} options (Optional) Hook options
 * @returns Current data value, Loading status, Error status and request function
 */
const useGet = <U>(action: Action<U>, options?: UseGetOptions) => {
  const [data, setData] = useState<U>();
  const [state, setState] = useState({ loading: false, error: "" });

  const request: Action<U> = async () => {
    try {
      setState({ loading: true, error: "" });
      const response = await action();
      setState({ loading: false, error: "" });
      setData(response);
      return response;
    } catch (error) {
      setState({ loading: false, error: String(error) });
      throw error;
    }
  };

  useMounted(() => {
    if (options?.initialLoad !== false) {
      request();
    }
  });

  return { data, request, ...state };
};

export default useGet;

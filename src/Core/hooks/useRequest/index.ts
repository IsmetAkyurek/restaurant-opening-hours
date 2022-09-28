import { useState } from "react";

type Action<T extends Array<unknown>, U> = (...args: T) => Promise<U>;

/**
 * Takes a promise action and returns loading and error statuses along with the request function.
 * @param {Function} action Promise action
 * @returns Loading status, Error status and request function
 */
const useRequest = <T extends Array<unknown>, U>(action: Action<T, U>) => {
  const [state, setState] = useState({ loading: false, error: "" });

  const request: Action<T, U> = async (...args: T) => {
    try {
      setState({ loading: true, error: "" });
      const response = await action(...args);
      setState({ loading: false, error: "" });
      return response;
    } catch (error) {
      setState({ loading: false, error: String(error) });
      throw error;
    }
  };

  return { request, ...state };
};

export default useRequest;

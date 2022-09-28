import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * Base axios instance to be used for API calls.
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const interceptors = {
  onSuccess: (response: AxiosResponse) => {
    return response;
  },
  onError: (e: AxiosError<{ message: string }>) => {
    const message = e.response?.data?.message || e?.message || "Unknown error occured.";
    throw message;
  },
};

api.interceptors.response.use(interceptors.onSuccess, interceptors.onError);

export default api;

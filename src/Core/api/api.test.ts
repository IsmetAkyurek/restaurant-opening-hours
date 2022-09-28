import {} from "@testing-library/react";

describe("Core API", () => {
  it("should create axios instance with env API Url", async () => {
    process.env.REACT_APP_API_URL = "Test BaseURL";

    const api = (await import(".")).default;

    expect(api.defaults.baseURL).toEqual("Test BaseURL");
  });

  it("should return the data in onSuccess interceptor", async () => {
    const data = { status: 200, statusText: "success", config: {}, data: {}, headers: {} };
    const interceptors = (await import(".")).interceptors;

    const result = interceptors.onSuccess(data);

    expect(result).toEqual(data);
  });

  it("should throw the error message in onError interceptor", async () => {
    const data = { config: {}, isAxiosError: false, message: "", name: "", toJSON: jest.fn() };
    const interceptors = (await import(".")).interceptors;

    const onError = () => interceptors.onError(data);

    expect(onError).toThrowError("Unknown error occured.");
  });
});

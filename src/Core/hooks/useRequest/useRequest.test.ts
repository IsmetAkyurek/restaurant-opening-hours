import useRequest from ".";
import { renderHook, act } from "@testing-library/react";

describe(`Core Hook : ${useRequest.name}`, () => {
  it("should call callback with given parameter and return correct values", async () => {
    const payload = "Payload";
    const callback = jest.fn((arg) => Promise.resolve(arg));

    const hook = renderHook(() => useRequest(callback));

    await act(async () => {
      const result = await hook.result.current.request(payload);

      expect(callback).toBeCalledWith(payload);
      expect(result).toEqual(payload);
    });
  });

  it("should return the error message when error is thrown", async () => {
    const callback = jest.fn(() => Promise.reject("Error"));
    const hook = renderHook(() => useRequest(callback));

    await act(async () => {
      try {
        await hook.result.current.request();
      } catch (error) {
        expect(error).toEqual("Error");
      }
    });

    expect(hook.result.current.error).toEqual("Error");
  });
});

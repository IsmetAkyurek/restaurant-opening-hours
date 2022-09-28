import useGet from ".";
import { renderHook, waitFor, act } from "@testing-library/react";

describe(`Core Hook : ${useGet.name}`, () => {
  it("should call callback and return correct values", async () => {
    const callback = jest.fn(() => Promise.resolve("Response"));

    const hook = renderHook(() => useGet(callback));

    await waitFor(() => expect(hook.result.current.loading).toBeTruthy());
    await waitFor(() => expect(hook.result.current.loading).toBeFalsy());

    expect(callback).toBeCalledTimes(1);
    expect(hook.result.current.data).toEqual("Response");
    expect(hook.result.current.error).toEqual("");
  });

  it("should return the error message when error is thrown", async () => {
    const callback = jest.fn(() => Promise.reject("Error"));
    const hook = renderHook(() => useGet(callback, { initialLoad: false }));

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

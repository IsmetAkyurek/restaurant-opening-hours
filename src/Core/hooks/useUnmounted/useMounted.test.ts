import useUnmounted from ".";
import { renderHook } from "@testing-library/react";

describe(`Core Hook : ${useUnmounted.name}`, () => {
  it("should call callback once when unmounted", () => {
    const callback = jest.fn();

    const hook = renderHook(() => useUnmounted(callback));

    expect(callback).not.toBeCalled();

    hook.unmount();

    expect(callback).toBeCalledTimes(1);
  });
});

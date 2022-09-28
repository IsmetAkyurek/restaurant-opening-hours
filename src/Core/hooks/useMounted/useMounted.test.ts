import useMounted from ".";
import { renderHook } from "@testing-library/react";

describe(`Core Hook : ${useMounted.name}`, () => {
  it("should call callback once when mounted", () => {
    const callback = jest.fn();

    renderHook(() => useMounted(callback));

    expect(callback).toBeCalledTimes(1);
  });
});

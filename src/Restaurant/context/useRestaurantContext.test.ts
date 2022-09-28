import useRestaurantContext from ".";
import { renderHook } from "@testing-library/react";

const contextMock = {
  loading: false,
  restaurant: "Restaurant",
  onSelectRestaurant: () => {},
};

jest.mock("react", () => {
  const ReactActual = jest.requireActual("react");
  return {
    ...ReactActual,
    useContext: () => contextMock,
  };
});

describe(`Restaurant Hook : ${useRestaurantContext.name}`, () => {
  it("should return the context value", () => {
    const { result } = renderHook(() => useRestaurantContext());

    expect(result.current).toEqual(contextMock);
  });
});

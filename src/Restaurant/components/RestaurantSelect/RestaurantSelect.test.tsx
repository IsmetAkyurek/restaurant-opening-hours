import RestaurantSelect from ".";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import * as useRestaurantContext from "Restaurant/context";
import useRestaurantContextMock from "__mocks__/useRestaurantContextMock";

jest.mock("Core/hooks/useGet", () => () => ({
  loading: false,
  data: [{ id: 1, name: "Test" }],
}));

describe(`Restaurant Component : ${RestaurantSelect.name}`, () => {
  it("should call context onSelectRestaurant on item is clicked", async () => {
    window.dataLayer = [];
    const onSelectRestaurant = jest.fn();

    jest.spyOn(useRestaurantContext, "default").mockImplementation(useRestaurantContextMock({ onSelectRestaurant }));

    render(<RestaurantSelect />);

    const itemElement = screen.getByText("Test");

    await userEvent.click(itemElement);

    expect(onSelectRestaurant).toBeCalledWith(1);
  });
});

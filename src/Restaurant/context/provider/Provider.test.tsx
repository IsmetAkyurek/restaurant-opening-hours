import RestaurantContextProvider from ".";
import userEvent from "@testing-library/user-event";
import RestaurantContext from "Restaurant/context/context";
import { act, render, screen, waitFor } from "@testing-library/react";

jest.mock("Core/hooks/useRequest", () => () => ({
  loading: false,
  request: async (id: number) => Promise.resolve({ id }),
}));

describe(`Restaurant Component : ${RestaurantContextProvider.name}`, () => {
  it("should call and set the restaurant data with given ID", async () => {
    render(
      <RestaurantContextProvider>
        <RestaurantContext.Consumer>
          {(props) => (
            <>
              <button onClick={() => props.onSelectRestaurant(1)}>Button</button>
              {props.restaurant?.id && <span>{props.restaurant?.id}</span>}
            </>
          )}
        </RestaurantContext.Consumer>
      </RestaurantContextProvider>
    );

    const buttonElement = screen.getByText("Button");

    userEvent.click(buttonElement);
    await waitFor(() => expect(screen.queryByText("1")).toBeInTheDocument());
  });

  it("should reset restaurant data given an undefined ID", async () => {
    render(
      <RestaurantContextProvider>
        <RestaurantContext.Consumer>
          {(props) => (
            <>
              <button onClick={() => props.onSelectRestaurant(1)}>Fill Button</button>
              <button onClick={() => props.onSelectRestaurant(undefined)}>Clear Button</button>
              {props.restaurant?.id && <span>{props.restaurant?.id}</span>}
            </>
          )}
        </RestaurantContext.Consumer>
      </RestaurantContextProvider>
    );

    const fillButtonElement = screen.getByText("Fill Button");
    const clearButtonElement = screen.getByText("Clear Button");

    await act(() => userEvent.click(fillButtonElement));
    userEvent.click(clearButtonElement);
    await waitFor(() => expect(screen.queryByText("1")).not.toBeInTheDocument());
  });
});

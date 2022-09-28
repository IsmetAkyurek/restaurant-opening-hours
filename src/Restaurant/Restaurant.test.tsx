import Restaurant from ".";
import { render, screen } from "@testing-library/react";
import { RestaurantContextProviderProps } from "./context/provider";

jest.mock("Restaurant/layout", () => () => <div>Restaurant Layout</div>);
jest.mock("Restaurant/context/provider", () => (props: RestaurantContextProviderProps) => (
  <div>
    <span>Restaurant Context</span>
    {props.children}
  </div>
));

describe(`Restaurant Component : ${Restaurant.name}`, () => {
  it("should render layout and context components", () => {
    render(<Restaurant />);

    const contextElement = screen.getByText("Restaurant Context");
    const layoutElement = screen.getByText("Restaurant Layout");

    expect(contextElement).toBeInTheDocument();
    expect(layoutElement).toBeInTheDocument();
  });
});

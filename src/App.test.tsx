import App from "./App";
import { render, screen } from "@testing-library/react";

jest.mock("Restaurant", () => () => <div>Restaurant</div>);

describe(`Component : ${App.name}`, () => {
  it("should render the app", () => {
    render(<App />);

    const restaurantElement = screen.getByText("Restaurant");

    expect(restaurantElement).toBeInTheDocument();
  });
});

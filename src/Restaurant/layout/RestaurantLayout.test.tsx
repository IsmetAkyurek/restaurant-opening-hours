import RestaurantLayout from ".";
import { Restaurant } from "Restaurant/types";
import { LoadingProps } from "Core/components/Loading";
import { render, screen } from "@testing-library/react";
import * as useRestaurantContext from "Restaurant/context";
import useRestaurantContextMock from "__mocks__/useRestaurantContextMock";

jest.mock("Restaurant/components/RestaurantSelect", () => () => <div>Restaurant Select</div>);
jest.mock("Restaurant/components/LocationMap", () => () => <div>Location Map</div>);
jest.mock("Core/components/Loading", () => (props: LoadingProps) => <div>{props.children}</div>);

describe(`Restaurant Component : ${RestaurantLayout.name}`, () => {
  it("should render only RestaurantSelect when restaurant is empty", () => {
    jest.spyOn(useRestaurantContext, "default").mockImplementation(useRestaurantContextMock({ loading: true }));

    render(<RestaurantLayout />);

    const logoElement = screen.getByAltText("Wolt");
    const selectElement = screen.getByText("Restaurant Select");
    const locationMapElement = screen.getByText("Location Map");

    expect(logoElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(locationMapElement).toBeInTheDocument();
  });

  it("should render RestaurantSelect and OpeningHours when restaurant is not empty", () => {
    const restaurant: Restaurant = { id: 1, name: "Restaurant", location: [41, 38], openingHours: [] };

    jest.spyOn(useRestaurantContext, "default").mockImplementation(useRestaurantContextMock({ restaurant }));

    render(<RestaurantLayout />);

    const logoElement = screen.queryByAltText("Wolt");
    const selectElement = screen.getByText("Restaurant Select");
    const locationMapElement = screen.getByText("Location Map");

    expect(logoElement).not.toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(locationMapElement).toBeInTheDocument();
  });
});

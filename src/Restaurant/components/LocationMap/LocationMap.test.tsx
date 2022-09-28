import LocationMap from ".";
import { MapProps } from "Core/components/Map";
import { render, screen } from "@testing-library/react";
import * as useRestaurantContext from "Restaurant/context";
import { MapMarkerProps } from "Core/components/MapMarker";
import useRestaurantContextMock from "__mocks__/useRestaurantContextMock";

jest.mock("Core/components/Map", () => {
  const { forwardRef } = jest.requireActual("react");
  return forwardRef((props: MapProps, _: any) => (
    <div>
      {props.center && (
        <span>
          {props.center[0]}, {props.center[1]}
        </span>
      )}
      {props.children}
    </div>
  ));
});

jest.mock("Core/components/MapMarker", () => (props: MapMarkerProps) => <div>{props.children}</div>);

describe(`RestaurantComponent : ${LocationMap.name}`, () => {
  it("should render background when there is no restaurant", () => {
    jest.spyOn(useRestaurantContext, "default").mockImplementation(useRestaurantContextMock({}));

    render(<LocationMap />);

    const imgElement = screen.getByAltText("Background");

    expect(imgElement).toBeInTheDocument();
  });

  it("should render map when there is a restaurant", () => {
    jest
      .spyOn(useRestaurantContext, "default")
      .mockImplementation(
        useRestaurantContextMock({ restaurant: { id: 1, location: [42, 38], name: "", openingHours: [] } })
      );

    render(<LocationMap />);

    const imgElement = screen.queryByAltText("Background");
    const markerElement = screen.getByText(`42, 38`);

    expect(imgElement).not.toBeInTheDocument();
    expect(markerElement).toBeInTheDocument();
  });
});

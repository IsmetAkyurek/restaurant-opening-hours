import Map from ".";
import { render, screen } from "@testing-library/react";

describe(`Core Component : ${Map.name}`, () => {
  it("should render leaflet map", () => {
    const { container } = render(<Map />);

    const mapElement = container.querySelector(".leaflet-map-pane");

    expect(mapElement).toBeInTheDocument();
  });

  it("should render children", () => {
    render(
      <Map>
        <span>Children</span>
      </Map>
    );

    const childrenElement = screen.getByText("Children");

    expect(childrenElement).toBeInTheDocument();
  });
});

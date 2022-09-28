import MapMarker from ".";
import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";

jest.mock("react-leaflet", () => {
  const ReactLeafletActual = jest.requireActual("react-leaflet");
  return {
    ...ReactLeafletActual,
    Marker: (props: { position: [number, number]; children: ReactNode }) => (
      <div>
        <span>
          {props.position[0]}, {props.position[1]}
        </span>
        {props.children}
      </div>
    ),
    Tooltip: (props: { children: ReactNode }) => <div>Tooltip : {props.children}</div>,
  };
});

describe(`Core Component : ${MapMarker.name}`, () => {
  it("should render children as Tooltip", () => {
    render(<MapMarker position={[41, 38]}>Children</MapMarker>);

    const tooltipElement = screen.getByText("Tooltip : Children");

    expect(tooltipElement).toBeInTheDocument();
  });

  it("should pass location prop to Leaflet Marker", () => {
    render(<MapMarker position={[41, 38]} />);

    const markerElement = screen.getByText("41, 38");

    expect(markerElement).toBeInTheDocument();
  });
});

import { ReactNode } from "react";
import { Marker, Tooltip } from "react-leaflet";

export type MapMarkerProps = {
  children?: ReactNode;
  position: [number, number];
};

/**
 * Renders Leaflet marker inside a Leaflet map on the given position.
 * @param {[number, number]} position [lon, lat] position of the Marker
 * @param {ReactNode} children (Optional) Elements to be rendered inside a Leaflet tooltip
 */
const MapMarker: React.FC<MapMarkerProps> = ({ children, position }) => {
  return (
    <Marker position={position}>
      {children && (
        <Tooltip direction="auto" permanent={true}>
          {children}
        </Tooltip>
      )}
    </Marker>
  );
};

export default MapMarker;

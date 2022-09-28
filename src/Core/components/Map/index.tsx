import styles from "./Map.module.scss";
import { Map as LeafletMap } from "leaflet";
import { leafletOptions } from "Core/constants";
import { forwardRef, ReactNode, RefObject } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

export type MapProps = {
  children?: ReactNode;
  center?: [number, number];
  ref?: RefObject<LeafletMap>;
};

/**
 * Renders Leaflet map with the Google Map layer.
 * @param {[number, number]} center (Optional) [lon, lat] position to center in the map
 * @param {ReactNode} children (Optional) Elements to be rendered inside
 * @param {RefObject<LeafletMap>} ref (Optional) Component ref parameter
 */
const Map = forwardRef<LeafletMap, MapProps>(({ center, children }, ref) => {
  return (
    <MapContainer
      ref={ref}
      center={center}
      zoom={leafletOptions.zoom}
      className={styles.container}
      zoomControl={leafletOptions.zoomControl}
    >
      <TileLayer url={leafletOptions.layer.url} subdomains={leafletOptions.layer.subdomains} />
      <ZoomControl position="bottomright" />
      <img className={styles.logo} src="/img/logo.svg" alt="Wolt" />
      {children}
    </MapContainer>
  );
});

export default Map;

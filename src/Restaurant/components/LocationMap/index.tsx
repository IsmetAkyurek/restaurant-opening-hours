import { useEffect, useRef } from "react";
import { Map as LeafletMap } from "leaflet";
import styles from "./LocationMap.module.scss";
import { Map, MapMarker } from "Core/components";
import useRestaurantContext from "Restaurant/context";

/**
 * Renders either a background image or a Leaflet Map with a Marker depending on the restaurant value from Restaurant Context.
 * @returns {JSX.Element} Backgound image or Leaflet Map with a Marker depending on the restaurant value
 */
const LocationMap: React.FC = () => {
  const ref = useRef<LeafletMap>(null);
  const restaurantContext = useRestaurantContext();

  useEffect(() => {
    if (restaurantContext.restaurant) {
      ref.current?.setView([...restaurantContext.restaurant.location]);
      ref.current?.setZoom(16);
    }
  }, [restaurantContext.restaurant]);

  return (
    <div className={styles.container}>
      {restaurantContext.restaurant ? (
        <Map center={restaurantContext.restaurant.location} ref={ref}>
          <MapMarker position={restaurantContext.restaurant.location}>{restaurantContext.restaurant.name}</MapMarker>
        </Map>
      ) : (
        <img className={styles.background} src="/img/bg.jpg" alt="Background" loading="lazy" />
      )}
    </div>
  );
};

export default LocationMap;

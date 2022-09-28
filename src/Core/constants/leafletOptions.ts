/**
 * Default Leaflet Map options to be used.
 */
const leafletOptions = {
  zoom: 18,
  zoomControl: false,
  layer: {
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    url: "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  },
};

export default leafletOptions;

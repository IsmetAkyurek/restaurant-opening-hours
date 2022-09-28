import Map from "Core/components/Map";
import { Story } from "@storybook/react";
import MapMarker, { MapMarkerProps } from ".";

export default {
  component: MapMarker,
  title: "Core/MapMarker",
};

const Template: Story<MapMarkerProps> = (args) => (
  <div style={{ height: 500 }}>
    <Map center={[60.1699, 24.9384]}>
      <MapMarker {...args} />
    </Map>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Marker",
  position: [60.1699, 24.9384],
};

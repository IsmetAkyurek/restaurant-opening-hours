import Map, { MapProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Map,
  title: "Core/Map",
};

const Template: Story<MapProps> = (args) => (
  <div style={{ height: 500 }}>
    <Map {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  center: [60.1699, 24.9384],
};

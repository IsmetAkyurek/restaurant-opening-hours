import RestaurantSelect from ".";
import { Story } from "@storybook/react";
import RestaurantContextProvider from "Restaurant/context/provider";

export default {
  component: RestaurantSelect,
  title: "Restaurant/RestaurantSelect",
};

const Template: Story = (args) => (
  <RestaurantContextProvider>
    <RestaurantSelect {...args} />
  </RestaurantContextProvider>
);

export const Default = Template.bind({});

Default.args = {};

import { Story } from "@storybook/react";
import OpeningHours, { OpeningHoursProps } from ".";

export default {
  component: OpeningHours,
  title: "Restaurant/OpeningHours",
};

const Template: Story<OpeningHoursProps> = (args) => (
  <div style={{ width: 400 }}>
    <OpeningHours {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  data: [
    { day: "monday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "tuesday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "wednesday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "thursday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "friday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "saturday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
    { day: "sunday", openingHours: [{ open: "9:00 AM", close: "9:00 PM" }] },
  ],
};

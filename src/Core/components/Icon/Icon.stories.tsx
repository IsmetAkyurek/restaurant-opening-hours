import Icon, { IconProps } from ".";
import { Story } from "@storybook/react";

export default {
  component: Icon,
  title: "Core/Icon",
};

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "clock",
};

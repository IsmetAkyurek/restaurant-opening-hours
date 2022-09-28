import { Story } from "@storybook/react";
import Select, { SelectProps } from ".";

export default {
  component: Select,
  title: "Core/Select",
};

const Template: Story<SelectProps<number>> = (args) => (
  <div style={{ height: 500 }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Select.Option key={1} value={1}>
      1
    </Select.Option>,
    <Select.Option key={2} value={2}>
      2
    </Select.Option>,
  ],
};

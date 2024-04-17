import type { Meta, StoryObj } from "@storybook/react";

import Header from "./headermain";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Kartapp/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Button",
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: "black",
    text: "Button",
  },
};

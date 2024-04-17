import type { Meta, StoryObj } from "@storybook/react";

import MapWrapper from "./MapWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Kartapp/MapWrapper",
  component: MapWrapper,
  tags: ["autodocs"],
  argTypes: {
    points: {
      control: "object",
    },
  },
} satisfies Meta<typeof MapWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    points: [
      {
        locality: "Östra Kallfors",
        county: "Stockholm",
        latitude: 59.110495,
        longitude: 17.560215,
      },
      {
        locality: "Södertälje",
        county: "Stockholm",
        latitude: 59.196428,
        longitude: 17.627166,
      },
      {
        locality: "Pershagen",
        county: "Stockholm",
        latitude: 59.152798,
        longitude: 17.656331,
      },
    ],
  },
};

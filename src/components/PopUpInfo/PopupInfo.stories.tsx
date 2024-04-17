import type { Meta, StoryObj } from "@storybook/react";

import PopupInfo from "./PopupInfo";
import { Popup } from "react-leaflet";

const meta = {
  title: "Kartapp/PopUp",
  component: PopupInfo,
  tags: ["autodocs"],
  argTypes: {
    textResurs: { control: "text" },
    textBokningsstatus: { control: "text" },
    textTid: { control: "text" },
  },
} satisfies Meta<typeof PopupInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    textResurs: "Resurs: Mikael",
    textBokningsstatus: "Bokningsstatus: Slutförd",
    textTid: "Tid: 540 min",
  },
};

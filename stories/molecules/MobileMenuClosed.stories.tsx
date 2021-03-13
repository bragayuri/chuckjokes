/* eslint-disable functional/immutable-data */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { MobileMenuClosed, MobileMenuClosedProperties } from "./MobileMenuClosed";

export default {
  title: "Molecules/MobileMenuClosed",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  component: MobileMenuClosed,
  decorators: [
    (Story) => (
      <div style={{ width: "320px", height: "528px", backgroundColor: "transparent" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MobileMenuClosedProperties> = (arguments_) => (
  <MobileMenuClosed {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  labels: { open: "Open Menu" },
};

Default.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

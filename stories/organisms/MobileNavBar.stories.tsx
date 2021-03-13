/* eslint-disable functional/immutable-data */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import helpers from "../lib/helpers";
import { NavBarItem } from "../molecules/NavBarItem";
import { MobileNavBar, MobileNavBarProperties } from "./MobileNavBar";

export default {
  title: "Organisms/MobileNavBar",
  component: MobileNavBar,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px", height: "568px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<MobileNavBarProperties> = (arguments_) => (
  <MobileNavBar {...arguments_}>
    {helpers.navOptions.map((item) => (
      <div key={item.id}>
        <NavBarItem elementId="nav-item" handleScroll={() => {}} key={item.id} label={item.label} />
      </div>
    ))}
  </MobileNavBar>
);

export const Default = Template.bind({});
Default.args = {
  onClose: () => {},
  labels: { close: "Close menu", button: " Inspire yourself" },
};

Default.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

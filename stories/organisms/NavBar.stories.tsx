/* eslint-disable functional/immutable-data */
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import helpers from "../lib/helpers";
import { NavBarItem } from "../molecules/NavBarItem";
import { NavBar, NavbarProperties } from "./NavBar";

export default {
  title: "Organisms/NavBar",
  component: NavBar,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "ipad12p",
    },
  },
} as Meta;

const Template: Story<NavbarProperties> = (arguments_) => (
  <NavBar {...arguments_}>
    {helpers.navOptions.map((item) => (
      <ul key={item.id}>
        <NavBarItem elementId="nav-item" handleScroll={() => {}} key={item.id} label={item.label} />
      </ul>
    ))}
  </NavBar>
);

export const Default = Template.bind({});
Default.args = {
  labels: { button: "Insipre Yourself" },
};

/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { NavBarItem, NavBarItemProperties } from "./NavBarItem";

export default {
  title: "Molecules/NavBarItem",
  component: NavBarItem,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", backgroundColor: "#362a2d" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<NavBarItemProperties> = (arguments_) => <NavBarItem {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};

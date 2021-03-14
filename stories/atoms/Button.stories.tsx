/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Button, ButtonProperties, ButtonSize } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProperties> = (arguments_) => <Button {...arguments_} />;

export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.LARGE,
  children: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: ButtonSize.MEDIUM,
  children: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.SMALL,
  children: "Small Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: ButtonSize.SMALL,
  children: "Disabled Button",
  disabled: true,
};

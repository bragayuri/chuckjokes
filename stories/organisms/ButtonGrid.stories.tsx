/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { ButtonGrid, ButtonGridProperties } from "./ButtonGrid";

export default {
  title: "Organisms/ButtonGrid",
  component: ButtonGrid,
} as Meta;

const Template: Story<ButtonGridProperties> = (arguments_) => <ButtonGrid {...arguments_} />;

export const Default = Template.bind({});

Default.args = {
  buttonProps: [
    {
      id: "0",
      label: "Animal",
      onClick: () => {},
      color: "orange",
    },
    {
      id: "1",
      label: "Animal",
      onClick: () => {},
      color: "yellow",
    },
    {
      id: "2",
      label: "Animal",
      onClick: () => {},
      color: "green",
    },
    {
      id: "3",
      label: "Animal",
      onClick: () => {},
      color: "yellow",
    },
  ],
};

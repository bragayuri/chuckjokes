/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { BasicForm, BasicFormProperties } from "./BasicForm";

export default {
  title: "Organisms/BasicForm",
  component: BasicForm,
} as Meta;

const Template: Story<BasicFormProperties> = (arguments_) => <BasicForm {...arguments_} />;

export const Default = Template.bind({});

Default.args = {
  labels: {
    search: "Search",
    placeholder: "Search",
    title: "Search for Facts",
  },
};

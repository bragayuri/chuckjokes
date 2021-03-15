/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { LabeledInput, LabeledInputProperties } from "./LabeledInput";

export default {
  title: "Atoms/LabeledInput",
  component: LabeledInput,
} as Meta;

const Template: Story<LabeledInputProperties> = (arguments_) => <LabeledInput {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  id: "search",
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  id: "search",
  error: "Required Field",
};

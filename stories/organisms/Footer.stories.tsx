/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { Footer } from "./Footer";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as Meta;

const Template: Story = (arguments_) => <Footer {...arguments_} />;

export const Default = Template.bind({});

Default.args = {};

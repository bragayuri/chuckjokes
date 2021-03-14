/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { CHUCK_NORRIS_AVATAR } from "../lib/utils";
import { HomeBanner, HomeBannerProperties } from "./HomeBanner";

export default {
  title: "organisms/HomeBanner",
  component: HomeBanner,
} as Meta;

const Template: Story<HomeBannerProperties> = (arguments_) => <HomeBanner {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  img: {
    alt: "Chuck Norris Logo",
    href: CHUCK_NORRIS_AVATAR,
  },
  labels: {
    title: "Facts about Mr. Norris",
    main: "Chuck Norris is God§s cousin",
    more: "more",
  },
};

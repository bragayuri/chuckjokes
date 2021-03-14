/* eslint-disable functional/immutable-data */
import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { FlagMenu, FlagMenuProperties } from "./FlagMenu";

export default {
  title: "Molecules/FlagMenu",
  component: FlagMenu,
} as Meta;

const Template: Story<FlagMenuProperties> = (arguments_) => <FlagMenu {...arguments_} />;

export const Default = Template.bind({});

Default.args = {
  flagProperties: [
    {
      id: "",
      img: {
        imgURL: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-xl.png",
        imgAlt: "Brazilian Flag",
        imgId: "",
      },
      setLanguage: () => {},
    },
    {
      id: "",
      img: {
        imgURL:
          "https://www.vhv.rs/dpng/d/430-4309818_uk-flag-icon-british-flag-icon-png-transparent.png",
        imgAlt: "uk-flag",
        imgId: "",
      },
      setLanguage: () => {},
    },
    {
      id: "",
      img: {
        imgURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
        imgAlt: "ar-flag",
        imgId: "",
      },
      setLanguage: () => {},
    },
  ],
};

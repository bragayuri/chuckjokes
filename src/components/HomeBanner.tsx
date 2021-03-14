import React, { useEffect, useState } from "react";
import { getRandomObject } from "src/backend/randomObject";
import { useAppState } from "src/lib/context";
import i18n from "src/lib/i18n";
import { RandomObject } from "stories/lib/types";
import { HomeBanner, HomeBannerProperties } from "stories/organisms/HomeBanner";

import { NavSession } from "./NavBarComponent";

const HomeBannerComponent = (): JSX.Element => {
  const { randomObject } = useAppState();
  const [randomJoke, setRandomJoke] = useState("");

  const getRandomJoke = async (): Promise<string> => {
    const result: RandomObject = await getRandomObject();
    setRandomJoke(result.value);

    return result.value;
  };
  useEffect(() => {
    getRandomJoke();
  }, []);

  const bannerObjects: readonly HomeBannerProperties[] = [
    {
      componentId: NavSession.DAILY_JOKES,
      labels: {
        title: i18n.t("home.dailyJoke"),
        main: randomObject?.value ?? "Loading...",
      },
      img: {
        href: "/chuck-norris-logo-1.png",
        alt: "chuck-norris-logo",
      },
      isImgLeft: false,
    },
    {
      componentId: NavSession.ABOUT,
      labels: {
        title: i18n.t("home.moreAbout"),
        main: randomJoke ?? "Loading..",
      },
      img: {
        href: "/chuck-norris-emoji.png",
        alt: "Norris Emoji",
      },
      isImgLeft: true,
      isRandomObject: true,
      onClickRandom: () => {
        getRandomJoke();
      },
    },
  ];
  return (
    <>
      {bannerObjects.map((item) => (
        <div className="mt-14 md:px-10 xl:px-40 " key={item.labels.title}>
          <HomeBanner
            componentId={item.componentId}
            labels={item.labels}
            img={item.img}
            isImgLeft={item.isImgLeft}
            isRandomObject={item.isRandomObject}
            onClickRandom={item.onClickRandom}
          />
        </div>
      ))}
    </>
  );
};

export default HomeBannerComponent;

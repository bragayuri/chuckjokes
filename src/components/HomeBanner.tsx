import React, { useEffect, useState } from "react";
import { pickAJoke } from "src/backend/randomObject";
import { useAppState } from "src/lib/context";
import { RandomObject } from "stories/lib/types";
import { HomeBanner, HomeBannerProperties } from "stories/organisms/HomeBanner";

const HomeBannerComponent = (): JSX.Element => {
  const { randomObject } = useAppState();
  const [randomJoke, setRandomJoke] = useState("");

  const getRandomJoke = async (): Promise<string> => {
    const result: RandomObject = await pickAJoke();
    setRandomJoke(result.value);

    return result.value;
  };
  useEffect(() => {
    getRandomJoke();
  }, []);

  const bannerObjects: readonly HomeBannerProperties[] = [
    {
      labels: {
        title: "Chuck Joke of the Day",
        main: randomObject?.value ?? "Loading...",
      },
      img: {
        href: "/chuck-norris-logo-1.png",
        alt: "iphoneImage",
      },
      isImgLeft: false,
    },
    {
      labels: {
        title: "More about Mr. Norris...",
        main: randomJoke,
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

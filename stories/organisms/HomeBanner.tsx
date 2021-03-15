import React from "react";
import { BsPlusCircle } from "react-icons/bs";

export type HomeBannerProperties = {
  readonly isImgLeft: boolean;
  readonly isRandomObject?: boolean;
  readonly componentId: string;
  readonly onClickRandom?: () => void;
  readonly img: {
    readonly href: string;
    readonly alt: string;
  };
  readonly labels: {
    readonly title: string;
    readonly main: string;
    readonly more?: string;
  };
};

export const HomeBanner: React.FC<HomeBannerProperties> = ({
  labels,
  img,
  isImgLeft,
  isRandomObject,
  componentId,
  onClickRandom,
}) => {
  return (
    <div id={componentId} className="w-full">
      <div
        className={`flex flex-col ${
          isImgLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        } justify-between items-center`}>
        <div className="relative px-20 pb-6">
          <div
            style={{
              width: "22rem",
              height: "22rem",
            }}
            className="absolute left-6 -top-9 rounded-full bg-green-700 pb-10 z-0"
          />
          <div
            style={{ width: "18rem", height: "18rem" }}
            className="absolute left-36 top-18 rounded-full bg-yellow-500 pb-10 z-10"
          />
          <div
            style={{
              width: "503px",
              height: "265px",
              borderRadius: "250px / 125px",
              transform: "rotate(26deg)",
              backgroundColor: "#ececec",
            }}
            className="absolute left-0 bottom-24 rounded-full pb-10 z-20"
          />

          <img
            style={{ width: "350px", height: "540px" }}
            className="object-contain max-w-2xl rounded-full relative -left-6 -top-6 z-30"
            src={img.href}
            alt={img.alt}
          />
        </div>
        <div className="flex flex-col lg:w-2/5 py-20 px-2">
          <div className="pl-10">
            <h2 className="font-bold text-3xl text-black">
              <span>{labels.title}</span>
            </h2>
            {isRandomObject ? (
              <div className="py-4 flex justify-between items-center">
                <h3 className="text-xl text-black">
                  <span id="random-text">{labels.main}</span>
                </h3>
                <div
                  id="clickable-random"
                  onClick={onClickRandom}
                  className="mx-4 cursor-pointer flex">
                  <BsPlusCircle color="black" size="20" />
                  <span className="ps-2">{labels.more}</span>
                </div>
              </div>
            ) : (
              <div className="py-4">
                <h3 className="text-xl text-black">
                  <span id="random-text">{labels.main}</span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export type FlagMenuProperties = {
  readonly flagProperties: readonly {
    readonly id: string;
    readonly setLanguage: () => void;
    readonly img: {
      readonly imgURL: string;
      readonly imgAlt: string;
      readonly imgId: string;
    };
  }[];
};

export const FlagMenu: React.FC<FlagMenuProperties> = ({ flagProperties }) => {
  return (
    <div className="flex mx-10 gap-x-2">
      {flagProperties.map((item) => (
        <span key={item.id} className="cursor-pointer hover:opacity-80" onClick={item.setLanguage}>
          <img
            id={item.img.imgId}
            src={item.img.imgURL}
            className="w-5 h-5 rounded-full"
            alt={item.img.imgAlt}
          />
        </span>
      ))}
    </div>
  );
};

export default FlagMenu;

import React from "react";
import { Color } from "stories/lib/types";

import { Button } from "../atoms/Button";

export type GridButton = {
  readonly id: string;
  readonly label: string;
  readonly onClick: () => void;
  readonly color: Color;
};

export type ButtonGridProperties = {
  readonly buttonProps: readonly GridButton[] | undefined;
};

export const ButtonGrid: React.FC<ButtonGridProperties> = ({ buttonProps }) => {
  return (
    <div className="max-w-md flex justify-center items-center p-10">
      <div className="shadow-2xl grid grid-cols-4 gap-x-10 gap-y-2">
        {buttonProps?.map((item) => (
          <Button key={item.id} color={item.color} id={item.id} onClick={item.onClick}>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

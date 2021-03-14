import React, { FunctionComponent, ReactNode } from "react";

import { Color } from "../lib/types";

export enum ButtonSize {
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
  XSMALL = "X-SMAL",
}

export type ButtonProperties = {
  readonly id: string;
  readonly children?: ReactNode;
  readonly onClick?: () => void;
  readonly size?: ButtonSize;
  readonly type?: "button" | "submit" | "reset" | undefined;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly color?: Color;
};

const getClassName = (size: ButtonSize): string => {
  switch (size) {
    case ButtonSize.XSMALL:
      return "w-40 p-1.5 text-xs";

    case ButtonSize.SMALL:
      return "w-60 p-3.5 text-sm";

    case ButtonSize.LARGE:
      return "w-80 h-16 text-3xl";

    default:
      return "px-5 py-5 m-1 xl:px-10 xl:py-10 text-md";
  }
};

const getColorClassName = (color?: Color): string => {
  switch (color) {
    case "black":
      return "bg-black hover:bg-gray-800 focus:ring-gray-600 text-white";
    case "white":
      return "bg-white hover:bg-gray-50 focus:ring-gray-500 border-gray-300 text-gray-700";
    case "gray":
      return "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
    case "red":
      return "bg-red-600 hover:bg-red-700 focus:ring-red-500";
    case "orange":
      return "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500";
    case "yellow":
      return "bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-500";
    case "green":
      return "bg-green-600 hover:bg-green-700 focus:ring-green-500";
    case "teal":
      return "bg-teal-600 hover:bg-teal-700 focus:ring-teal-500";
    case "blue":
      return "bg-blue-800 hover:bg-blue-700 active:bg-blue-900";
    case "indigo":
      return "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
    case "purple":
      return "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500";
    case "pink":
      return "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500";
    case "transparent":
      return "text-gray-900 border-2";
    default:
      return "";
  }
};

export const Button: FunctionComponent<ButtonProperties> = ({
  id,
  onClick,
  size = ButtonSize.MEDIUM,
  type = "button",
  disabled = false,
  children,
  className = "",
  color = "yellow",
}) => {
  const colorClassName = getColorClassName(color);

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${getClassName(
        size,
      )} flex items-center shadow-2xl justify-center text-white rounded focus:outline-none cursor-pointer transition duration-500 ${
        disabled ? "opacity-75 cursor-not-allowed" : ""
      } ${className} ${colorClassName}`}>
      {children}
    </button>
  );
};

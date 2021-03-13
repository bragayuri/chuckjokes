import React from "react";

export type NavBarItemProperties = {
  readonly label: string;
  readonly isActive?: boolean;
  readonly elementId: string;
  readonly handleScroll: (id: string) => void;
};

export const NavBarItem: React.FC<NavBarItemProperties> = ({
  label,
  isActive,
  elementId,
  handleScroll,
}) => {
  return (
    <div onClick={() => handleScroll(elementId)}>
      <span className="text-red-900 cursor-pointer uppercase whitespace-nowrap text-sm hover:text-yellow-200 transition duration-700">
        {label}
      </span>
      {isActive && <div className="h-0.5 bg-green-700 w-full mt-1 transition duration-700" />}
    </div>
  );
};

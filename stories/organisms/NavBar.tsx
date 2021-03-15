import React, { FunctionComponent, ReactNode } from "react";

export type NavbarProperties = {
  readonly children: ReactNode;
  readonly labels: {
    readonly button: string;
  };
};

export const NavBar: FunctionComponent<NavbarProperties> = ({ children, labels }) => {
  return (
    <div id="navbar-container" className="hidden xl:block sticky top-0 w-full z-50">
      <nav
        id="navbar"
        className="bg-gray-50 shadow-lg flex justify-between items-center py-7 px-16 2xl:px-28 relative">
        <div className="flex space-x-4">{children}</div>
        <a
          id="norris-website-link"
          rel="noopener noreferrer"
          href="https://chucknorris.com/"
          className="uppercase whitespace-nowrap bg-yellow-500 text-lg text-center font-style text-white hover:opacity-90 transition duration-500 p-2.5 px-6 rounded-md">
          {labels.button}
        </a>
      </nav>
    </div>
  );
};

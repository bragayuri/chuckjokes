import React, { ReactNode } from "react";
import { Footer } from "stories/organisms/Footer";

import NavBarComponent from "./NavBarComponent";

const Container = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-between">
      <NavBarComponent />
      <div className="overflow-y-auto lg:static lg:h-auto">
        <main className="2xl:max-w-7xl 2xl:mx-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Container;

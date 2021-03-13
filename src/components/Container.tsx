import Head from "next/head";
import React, { ReactNode } from "react";

import NavBarComponent from "./NavBarComponent";

const Container = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-between">
      <Head>Chuck Norris Fun Facts</Head>
      <NavBarComponent />
      <div className="overflow-y-auto lg:static lg:h-auto">
        <main className="2xl:max-w-7xl 2xl:mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default Container;

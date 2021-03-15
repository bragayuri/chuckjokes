/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable unicorn/prevent-abbreviations */
import Head from "next/head";
import React, { ReactNode } from "react";
import safeLocalStorage from "src/lib/safeLocalStorage";
import { Footer } from "stories/organisms/Footer";

import NavBarComponent from "./NavBarComponent";

const Container = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const dir = safeLocalStorage.getItem("dir") || "ltr";
  return (
    <html dir={dir}>
      <Head>
        <title>Mr. Norris Facts</title>
      </Head>
      <div className="w-full flex flex-col justify-between">
        <NavBarComponent />
        <div className="overflow-y-auto lg:static lg:h-auto">
          <main className="2xl:max-w-7xl 2xl:mx-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </html>
  );
};

export default Container;

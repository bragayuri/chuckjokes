import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import ContextProvider from "src/lib/context";
import "styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;

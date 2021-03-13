import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import "../../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default MyApp;

/* eslint-disable functional/no-class */
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

// No document eu coloco tudo que e estatico para otimizar o processo

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Html dir="rtl">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

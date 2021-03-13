import Head from "next/head";
import React from "react";
import i18n from "src/lib/i18n";

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Chuck Norris Great Jokes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-screen w-full flex justify-center items-center">
        <div className="font-bold text-white cursor-pointer hover:text-yellow-300">
          {i18n.t("main.welcomeBack")} Chuck Norris!
        </div>
      </main>
    </div>
  );
};

export default Home;

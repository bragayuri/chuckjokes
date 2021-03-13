import Head from "next/head";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Chuck Norris Great Jokes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-screen w-full flex justify-center items-center">
        <div className="font-bold text-white cursor-pointer hover:text-yellow-300">
          Chuck Norris Jokes WebApp
        </div>
      </main>
    </div>
  );
};

export default Home;

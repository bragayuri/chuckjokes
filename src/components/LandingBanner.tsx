import React from "react";
import i18n from "src/lib/i18n";

const LandingBanner = (): JSX.Element => {
  return (
    <div className="bg-gray-100 overflow-y-scroll" id="HOME">
      <div className="flex flex-col-reverse xl:flex-row">
        <section className="w-full">
          <article className="flex flex-col space-y-10 px-2 xl:px-20 xl:pt-48">
            <header>
              <h1 id="main-title" className="text-black uppercase text-6xl font-bold">
                {i18n.t("landing.mrNorris")}
              </h1>
              <h1 className="uppercase text-red-900 text-xl font-style pt-2">
                {i18n.t("landing.handing")}
              </h1>
            </header>
            <article>
              <p className="me-4 text-black">
                {i18n.t("landing.support")}
                <a className="underline text-red-900" href="https://api.chucknorris.io/">
                  {" "}
                  {i18n.t("landing.api")}
                </a>
              </p>
            </article>
          </article>
        </section>
        <aside className="w-full flex justify-center my-0 py-0">
          <img
            className="object-contain w-96 h-96 my-0 py-0 xl:h-auto xl:w-auto xl:max-w-full"
            src="/landing-icon.png"
            alt="main-logo"
          />
        </aside>
      </div>
    </div>
  );
};

export default LandingBanner;

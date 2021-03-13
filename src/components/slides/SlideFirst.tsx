import React from "react";
import { CHUCK_NORRIS_AVATAR } from "stories/lib/utils";

const SlideFirst = (): JSX.Element => {
  return (
    <div id="slide">
      <div className="flex flex-col-reverse  xl:flex-row py-16 overflow-y-scroll">
        <section className="w-full relative text-center flex justify-center items-center">
          <article className="flex flex-col xl:px-20 mt-10 me-14 xl:me-0">
            <section className="text-red-900 font-serif">
              <span>
                "Chuck Norris once participated in the running of the bulls, the bulls were running
                because Chuck Norris was behind them"
              </span>
            </section>
          </article>
        </section>
        <aside className="w-full relative">
          <img
            style={{ width: "26rem" }}
            className="rounded-full object-fit"
            src={CHUCK_NORRIS_AVATAR}
            alt="chuck-norris-emoji"
          />
        </aside>
      </div>
    </div>
  );
};

export default SlideFirst;

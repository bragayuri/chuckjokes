import React from "react";
import { Loader } from "stories/atoms/Loader";

export const Loading = (): JSX.Element => (
  <div className="z-50 fixed h-screen w-screen flex items-center justify-center inset-0">
    <Loader />
  </div>
);

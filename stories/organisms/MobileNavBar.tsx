import React, { ReactNode } from "react";

import { CHUCK_NORRIS_AVATAR } from "../lib/utils";

export type MobileNavBarProperties = {
  readonly children: ReactNode;
  readonly onClose: () => void;
  readonly labels: {
    readonly close: string;
    readonly button: string;
  };
};

export const MobileNavBar: React.FC<MobileNavBarProperties> = ({ children, onClose, labels }) => {
  return (
    <div className="z-40 fixed inset-0 bg-black bg-opacity-25 xl:hidden">
      <div className="z-50 bg-gray-50 absolute top-0 inset-x-0 max-w-7xl mx-auto w-full p-2 transition transform origin-top xl:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200">
          <div className="pt-3 pb-2">
            <div className="flex items-center justify-between px-8">
              <div>
                <img
                  className="h-20 w-20 rounded-full object-fit"
                  src={CHUCK_NORRIS_AVATAR}
                  alt="chuck-norris-avatar"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={onClose}
                  type="button"
                  className="rounded-md bg-yellow-500 p-2 inline-flex items-center justify-center text-red-900 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  <span className="sr-only">{labels.close}</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-4">{children}</div>
            <div className="flex justify-center py-6">
              <button className="uppercase bg-yellow-500 text-sm text-white hover:opacity-90 p-3 rounded">
                {labels.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

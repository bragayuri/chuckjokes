import React from "react";

export type MobileMenuClosedProperties = {
  readonly onClick: () => void;
  readonly labels: {
    readonly open: string;
  };
};

export const MobileMenuClosed: React.FC<MobileMenuClosedProperties> = ({ onClick, labels }) => {
  return (
    <>
      <div className="sticky bg-gray-50 top-0 right-0 shadow h-16 w-full flex-shrink-0 xl:hidden z-40">
        <div className="flex px-2 py-2 justify-between items-start">
          <img
            className="h-14 w-14 rounded-full shadow object-fit"
            src="/chuck-norris-logo-1.png"
            alt="chuck-norris-logo"
          />
          <button
            onClick={onClick}
            className="bg-transparent p-3 rounded-md inline-flex items-center justify-center text-red-900 hover:text-blue-300 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded="false">
            <span className="sr-only">{labels.open}</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
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
    </>
  );
};

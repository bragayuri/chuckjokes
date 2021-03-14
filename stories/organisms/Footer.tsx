import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 sticky w-full z-10 bottom-0 flex flex-col justify-around items-center bg-gray-500">
      <div className="text-white text-xs flex flex-col justify-around space-x-3 items-center">
        <div className="pb-4">
          <a href="mailto:yuri.braga@codex.team" target="_blank" rel="noopener noreferrer">
            yuri.braga@codex.team
          </a>
        </div>

        <div className=" w-2/3 text-center">
          <p className="lg:leading-6">"Empowered by Chucknorris.IO API "</p>
        </div>
      </div>
      <div />
    </footer>
  );
};

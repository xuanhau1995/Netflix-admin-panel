import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

function TopFilm({ title, image, userScore, overview, view }) {
  return (
    <div className="flex cursor-pointer">
      <div className="flex space-x-2 items-center">
        <div className="h-12 w-12 rounded-lg overflow-hidden">
          <img src={image} className="h-full w-full" />
        </div>
        <div className="w-1/2 space-y-1">
          <h1 className="text-sm font-semibold line-clamp-1 text-white">
            {title}
          </h1>
          <p className="text-xs text-brand-500 line-clamp-1">{overview}</p>
        </div>
      </div>
      <div className="h-10 px-2 bg-brand-light flex items-center rounded-md text-xs space-x-2 text-white hover:bg-brand-700 transition-all duration-700">
        <PlayIcon className="h-4" />
        <p>{view}</p>
      </div>
    </div>
  );
}

export default TopFilm;

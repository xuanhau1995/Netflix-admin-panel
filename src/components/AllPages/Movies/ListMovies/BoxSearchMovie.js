import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
const BoxSearchMovie = () => {
  return (
    <div className="form-search">
      <SearchIcon className="h-6" />
      <input
        type="text"
        className="bg-transparent text-white text-sm placeholder-brand-600 border-0 focus:ring-0 w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default BoxSearchMovie;

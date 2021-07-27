import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

function Search() {
  return (
    <div className="form-search">
      <SearchIcon className="h-6" />
      <input
        type="text"
        className="bg-transparent text-sm text-brand-100 placeholder-brand-600 border-0 focus:ring-0 w-full"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;

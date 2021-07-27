import { FilterIcon } from "@heroicons/react/solid";
import React from "react";

function SortBy() {
  return (
    <div>
      {/* DropDown Here */}
      <button className="btn-dark">
        <FilterIcon className="h-4 mr-2" />
        Filter
      </button>
      {/* <DropDown /> */}
    </div>
  );
}

export default SortBy;

import React from "react";
import BoxSearchMovie from "./BoxSearchMovie";
import FilterCategories from "./FilterCategories";
import FilterDate from "./FilterDate";
import NewMovie from "./NewMovie";

const MovieBtnHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
        <BoxSearchMovie />
        <FilterCategories />
        <FilterDate />
      </div>

      <div>
        <NewMovie />
      </div>
    </div>
  );
};

export default MovieBtnHeader;

import React from "react";
import TopMovieViewest from "./TopMovieViewest";
import ChartMovieTrending from "./ChartMovieTrending";
function FilmTrending() {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-4">
        <TopMovieViewest />
      </div>
      <div className="col-span-8">
        <ChartMovieTrending />
      </div>
    </div>
  );
}

export default FilmTrending;

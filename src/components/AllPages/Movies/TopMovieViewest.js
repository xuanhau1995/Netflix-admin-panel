import React from "react";
import TopFilm from "../Widgets/TopFilm";
import { FilmData } from "../Widgets/FilmData";
function TopFilmViewest() {
  return (
    <div className="card-light">
      <div className="space-y-1">
        <h1 className="text-lg font-semibold">Top Films Viewest</h1>
        <p className="text-xs text-gray-500">Films active last month</p>
      </div>
      <div className="space-y-4 mt-4">
        {FilmData.map((film, i) => (
          <TopFilm
            id={film}
            title={film.title}
            image={film.image}
            overview={film.Overview}
            userScore={film.userScore}
            view={film.view}
          />
        ))}
      </div>
    </div>
  );
}

export default TopFilmViewest;

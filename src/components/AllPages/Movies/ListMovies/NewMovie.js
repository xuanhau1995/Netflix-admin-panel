import { PlusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";

const NewMovie = () => {
  return (
    <div className="btn-dark bg-brand-700 hover:bg-brand-700">
      <PlusCircleIcon className="h-6" />
      <p>New Movie</p>
    </div>
  );
};

export default NewMovie;

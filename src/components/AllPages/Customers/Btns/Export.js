import { UploadIcon } from "@heroicons/react/solid";
import React from "react";

function Export() {
  return (
    <div>
      <button className="btn-dark">
        <UploadIcon className="h-4 mr-2" />
        Exports
      </button>
    </div>
  );
}

export default Export;

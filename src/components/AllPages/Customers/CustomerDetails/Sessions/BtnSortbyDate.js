import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function BtnSortbyDate() {
  const [activeDate, setActiveDate] = useState("thisyear");
  useEffect(() => {
    switch (activeDate) {
      case "thisyear":
        break;
      case "2020":
        break;
      case "2019":
        break;
      case "2018":
        break;
    }
  }, []);
  return (
    <div className="space-x-4">
      <button
        onClick={() => setActiveDate("thisyear")}
        className={`h-12 text-sm font-medium transition duration-500 hover:text-brand-200 hover:border-b-2 ${
          activeDate === "thisyear"
            ? " border-b-2 border-brand-200 text-brand-200"
            : "text-brand-500 "
        }`}
      >
        This Year
      </button>
      <button
        onClick={() => setActiveDate("2020")}
        className={`h-12 text-sm font-medium transition duration-500 hover:text-brand-200 hover:border-b-2 ${
          activeDate === "2020"
            ? " border-b-2 border-brand-200 text-brand-200"
            : "text-brand-500 "
        }`}
      >
        2020
      </button>
      <button
        onClick={() => setActiveDate("2019")}
        className={`h-12 text-sm font-medium transition duration-500 hover:text-brand-200 hover:border-b-2 ${
          activeDate === "2019"
            ? " border-b-2 border-brand-200 text-brand-200"
            : "text-brand-500 "
        }`}
      >
        2019
      </button>
      <button
        onClick={() => setActiveDate("2018")}
        className={`h-12 text-sm font-medium transition duration-500 hover:text-brand-200 hover:border-b-2 ${
          activeDate === "2018"
            ? " border-b-2 border-brand-200 text-brand-200"
            : "text-brand-500 "
        }`}
      >
        2018
      </button>
    </div>
  );
}

export default BtnSortbyDate;

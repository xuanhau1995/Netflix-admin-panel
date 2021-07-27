import React from "react";
import Search from "./Search";
import SortBy from "./SortBy";
import NewCustomer from "./NewCustomer";
import Export from "./Export";

function ButtonsAction() {
  return (
    <div className="flex justify-between">
      <Search />
      <div className="flex space-x-3">
        <SortBy />
        <Export />
        <NewCustomer />
      </div>
    </div>
  );
}

export default ButtonsAction;

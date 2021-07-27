import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import React from "react";

function Widgets({ title, Icon, desc, count, increase, reduction }) {
  return (
    <div className="card-light space-y-3 cursor-pointer">
      <div className="flex justify-between">
        <h1 className="text-lg text-brand-500">{title}</h1>
        {Icon && <Icon className="h-6 text-brand-500" />}
      </div>
      <div className="flex items-end space-x-2">
        <p className="text-3xl font-semibold">{count}</p>
        <p className="text-sm flex items-center space-x-1">
          {increase ? (
            <ArrowUpIcon className="h-3 text-blue-500" />
          ) : (
            <ArrowDownIcon className="h-3 text-red-500" />
          )}
          {increase && <p className="text-blue-400">{increase}</p>}
          {reduction && <p className="text-red-400">{reduction}</p>}
        </p>
      </div>
      <p className="text-sm text-brand-500">{desc}</p>
    </div>
  );
}

export default Widgets;

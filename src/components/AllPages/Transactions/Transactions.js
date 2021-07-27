import React from "react";
import { TicketIcon } from "@heroicons/react/solid";
function Transactions({
  name,
  typeAccount,
  avatar,
  timestamp,
  status,
  income,
}) {
  return (
    <div className="flex mx-2 px-4 py-3 transition-all duration-500 justify-between items-center rounded-md hover:bg-brand-light cursor-pointer">
      <div className="flex space-x-3">
        <div>
          <img className="h-12 w-12 rounded" src={avatar} />
        </div>
        <div className=" space-y-1">
          <h1 className="text-sm font-medium">{name}</h1>
          <p className="Premium-acc">
            <TicketIcon className="h-4 pr-2" />
            {typeAccount}
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="flex justify-end text-sm">{income}</p>
        <p className="text-xs text-brand-500 flex justify-end">{timestamp}</p>
      </div>
      {status ? (
        <p className="h-6 flex items-center text-xs font-medium px-2 rounded bg-green-500 bg-opacity-20 text-green-500">
          Success
        </p>
      ) : (
        <p className="h-6 flex items-center text-xs font-medium px-2 rounded bg-red-500 bg-opacity-20 text-red-500">
          Pending
        </p>
      )}
    </div>
  );
}

export default Transactions;

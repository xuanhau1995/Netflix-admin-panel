import React, { useState } from "react";
import Avatar from "../../../image/avatar3.png";
import { Switch } from "@headlessui/react";
const demoAcc = [
  {
    name: "John Haray",
    accountId: "123455",
    dateJoin: "20/12/2021",
    status: "Actived",
  },
  {
    name: "Hola la",
    accountId: "123455",
    dateJoin: "20/12/2021",
    status: "Actived",
  },
  {
    name: "Hary Potter",
    accountId: "123455",
    dateJoin: "20/12/2021",
    status: "Actived",
  },
];
const ConnectedAcounts = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="card-light">
      <h1>Shared Accounts</h1>
      <hr className="my-6 border-dashed border-brand-800" />
      <div className="space-y-3">
        {demoAcc.map((demo, index) => (
          <>
            <div
              key={index}
              className="flex justify-between items-center space-x-2"
            >
              <div className="flex space-x-2 flex-grow">
                <img src={Avatar} className="h-10 w-10 rounded" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-brand-200">
                    {demo.name}
                  </p>
                  <p className="text-xs text-brand-500">{demo.accountId}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-brand-500 items-center flex">
                  {demo.dateJoin}
                </p>
              </div>
              <div>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${enabled ? "bg-red-600" : "bg-brand-700"}
          relative inline-flex flex-shrink-0 h-[26px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${
                      enabled
                        ? "translate-x-6 bg-white"
                        : "translate-x-0 bg-brand-500"
                    }
            pointer-events-none inline-block h-[22px] w-[22px] rounded-full  shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ConnectedAcounts;

import { Edit, PersonAddDisabled } from "@material-ui/icons";
import React from "react";
import Avatar from "../../../image/avatar3.png";
import Details from "./Details";
const Info = () => {
  return (
    <div className="card-light">
      <div>
        <div className="flex justify-center">
          <img className="h-40 w-40 rounded-full" src={Avatar} />
        </div>
        <div>
          <h1 className="flex justify-center text-2xl font-medium pt-6">
            Max Smith
          </h1>
          <div className="flex justify-center pt-2">
            <p className="Premium-acc inline-flex">Premium User</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <h1 className="">Account Details</h1>
        <button className="p-3 text-xs rounded-md bg-brand-800 hover:bg-brand-700 duration-500">
          Edit Customer
        </button>
      </div>
      <hr className="border-brand-800 my-4 border-dashed" />
      <div className="space-y-4">
        <Details title="Account ID" details="D-45453423" />
        <Details title="Phone" details="9085453423" />
        <Details title="Billing Email" details="info@keenthemes.com" />
        <Details title="Upcoming Invoice" details="54238-8693" />
        <Details
          title="Billing Address"
          details="101 Collin Street,Melbourne 3000 VIC Australia"
        />
        <hr className="border-brand-800 my-4" />
        <Details title="Status Account" status="Actived" />
        <Details title="Remaining operating time" details="1 Month" />
      </div>
    </div>
  );
};

export default Info;

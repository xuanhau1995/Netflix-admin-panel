import React from "react";
import TabOverview from "./TabOverview";
import Info from "./Info";
import ConnectedAcounts from "./ConnectedAcounts";
import Security from "./Security";
import PaymentRecords from "./Sessions/PaymentRecords";
import PaymentMethod from "./Sessions/PaymentMethod";
import LoginSession from "./Sessions/LoginSession";

const CustomerDetails = () => {
  return (
    <>
      <h1 className="pb-6 text-brand-300">Customer Details</h1>
      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-4 space-y-6">
          <Info />
          <Security />
          <ConnectedAcounts />
        </div>
        <div className="col-span-8 space-y-6">
          <PaymentMethod />
          <PaymentRecords />
          <LoginSession />
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;

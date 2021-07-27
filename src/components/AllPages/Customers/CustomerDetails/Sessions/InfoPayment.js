import { DoneAll } from "@material-ui/icons";
import React from "react";

function InfoPayment({
  key,
  customer,
  number,
  type,
  expires,
  issuer,
  id,
  billingaddress,
  phone,
  email,
  origin,
  cvccheck,
}) {
  return (
    <div id={key} className="flex justify-between px-3">
      <div className="space-y-2 w-full">
        <span className="flex space-x-2">
          <p className="w-28">Name</p>
          <h1 className="text-brand-300">{customer}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Number</p>
          <h1 className="text-brand-300">{number}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Expires</p>
          <h1 className="text-brand-300">{expires}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Type</p>
          <h1 className="text-brand-300">
            {type === "Mastercard" && <p>Mastercard credit card</p>}
            {type === "Visa" && <p>Visa credit card</p>}
          </h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Issuer</p>
          <h1 className="text-brand-300">{issuer}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">ID</p>
          <h1 className="text-brand-300">{id}</h1>
        </span>
      </div>
      <div className="space-y-2 w-full">
        <span className="flex space-x-2">
          <p className="w-28">Billing address</p>
          <h1 className="text-brand-300">{billingaddress}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Phone</p>
          <h1 className="text-brand-300">{phone}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Email</p>
          <h1 className="text-brand-300">{email}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">Origin</p>
          <h1 className="text-brand-300">{origin}</h1>
        </span>
        <span className="flex space-x-2">
          <p className="w-28">CVC check</p>
          <h1 className="text-brand-300">
            {cvccheck ? (
              <p>
                Passed <DoneAll className="h-2 text-green-500" />
              </p>
            ) : (
              ""
            )}
          </h1>
        </span>
      </div>
    </div>
  );
}

export default InfoPayment;

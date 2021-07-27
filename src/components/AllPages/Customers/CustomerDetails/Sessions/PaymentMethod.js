import { Add } from "@material-ui/icons";
import MasterCard from "../../../../image/MasterCard_Logo.png";
import Visa from "../../../../image/Visa.png";
import InfoPayment from "./InfoPayment";
import PaymentBtnOption from "./PaymentBtnOption";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import React from "react";
import { Disclosure } from "@headlessui/react";

const PaymentMethodDemo = [
  {
    customer: "Emma Smith",
    status: "primary",
    type: "Mastercard",
    number: "**** 7942",
    expires: "12/2024",
    issuer: "VICBANK",
    id: "id_4325df90sdf8",
    billingaddress: "AU",
    phone: "No phone provided",
    email: "	e.smith@kpmg.com.au",
    origin: "VietName",
    cvccheck: true,
  },
  {
    customer: "Melody Macy",
    status: "expired",
    type: "Visa",
    number: "**** 3396",
    expires: "12/2024",
    issuer: "ENBANK",
    id: "id_4325df90sdf8",
    billingaddress: "VN",
    phone: "No phone provided",
    email: "	melody@altbox.com",
    origin: "VietName",
    cvccheck: true,
  },
];

const PaymentMethod = () => {
  return (
    <div className="card-light">
      <div className="flex items-center justify-between">
        <h1>Payment Methods</h1>
        <button className="btn-dark">
          <PlusCircleIcon className="h-5 mr-1" />
          Add new method
        </button>
      </div>
      <div className="w-full">
        {PaymentMethodDemo.map((payment, index) => (
          <>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="py-4 flex justify-between w-full rounded-md">
                    {/* this is header */}
                    <div className="flex justify-between w-full items-center">
                      <div className="flex items-center space-x-2">
                        <ChevronRightIcon
                          className={`h-5 duration-500 transition-all text-brand-500 ${
                            open ? "transform rotate-90" : ""
                          }`}
                        />
                        <div className="bg-brand-light w-14 h-8 inline-flex  justify-center items-center rounded-md">
                          {payment.type === "Mastercard" && (
                            <img src={MasterCard} className="h-4" />
                          )}
                          {payment.type === "Visa" && (
                            <img src={Visa} className="h-3" />
                          )}
                        </div>
                        <div className="">
                          <div className="flex space-x-3">
                            <h1 className="flex justify-start text-brand-300 font-semibold text-sm">
                              {payment.type}
                            </h1>
                            {payment.status === "primary" && (
                              <p className="active-badge">Primary</p>
                            )}
                            {payment.status === "expired" && (
                              <p className="danger-badge">Expired</p>
                            )}
                          </div>

                          <p className="text-xs text-brand-500 flex justify-start">
                            Expires Dec 2024
                          </p>
                        </div>
                      </div>
                      {/* RightSession */}
                      <div className="flex space-x-3">
                        <PaymentBtnOption />
                      </div>
                      {/* End */}
                    </div>
                    {/* End */}
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-4 text-sm text-brand-500 font-semibold">
                    <InfoPayment
                      key={index}
                      customer={payment.customer}
                      status={payment.status}
                      type={payment.type}
                      number={payment.number}
                      expires={payment.expires}
                      issuer={payment.issuer}
                      id={payment.id}
                      billingaddress={payment.billingaddress}
                      phone={payment.phone}
                      email={payment.email}
                      origin={payment.origin}
                      cvccheck={payment.cvccheck}
                    />
                  </Disclosure.Panel>
                  <hr className="border-dashed border-brand-800 mx-2" />
                </>
              )}
            </Disclosure>
          </>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;

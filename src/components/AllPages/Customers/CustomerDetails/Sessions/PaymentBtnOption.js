import React from "react";
import {
  ChevronRightIcon,
  ChevronUpIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/solid";
const PaymentBtnOption = () => {
  return (
    <div className="flex space-x-3">
      {/* Edit */}
      <div className="relative group justify-center flex">
        <p className="px-2 py-1 text-xs bg-brand-light mb-1 rounded -top-7 opacity-0 duration-500  absolute group-hover:opacity-100">
          Edit
        </p>
        <div className="h-8 w-8 rounded-md bg-brand-light flex justify-center items-center group-hover:bg-brand-800 duration-500">
          <PencilIcon className="h-5 text-brand-500" />
        </div>
      </div>
      {/* Delete */}
      <div className="relative group justify-center flex">
        <p className="px-2 py-1 text-xs bg-brand-light mb-1 rounded -top-7 opacity-0 duration-500  absolute group-hover:opacity-100">
          Delete
        </p>
        <div className="h-8 w-8 rounded-md bg-brand-light flex justify-center items-center group-hover:bg-brand-800 duration-500">
          <TrashIcon className="h-5 text-brand-500" />
        </div>
      </div>
      {/* More Option */}
      <div className="relative group justify-center flex">
        <p className="whitespace-nowrap px-2 py-1 text-xs bg-brand-light mb-1 rounded -top-7 opacity-0 duration-500  absolute group-hover:opacity-100">
          More Option
        </p>
        <div className="h-8 w-8 rounded-md bg-brand-light flex justify-center items-center group-hover:bg-brand-800 duration-500">
          <DotsCircleHorizontalIcon className="h-5 text-brand-500" />
        </div>
      </div>
    </div>
  );
};

export default PaymentBtnOption;

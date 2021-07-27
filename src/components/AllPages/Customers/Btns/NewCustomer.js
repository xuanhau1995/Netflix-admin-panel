import { UserAddIcon } from "@heroicons/react/solid";
import React from "react";
import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

function NewCustomer() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <button onClick={openModal} className="btn-dark">
        <UserAddIcon className="h-5 mr-2" />
        New Customer
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-brand-light border border-brand-700 shadow-2xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-brand-100"
                >
                  Create Customer
                </Dialog.Title>
                <div className="mt-6 space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className="peer border-brand-700 bg-brand-800 transition ease-in-out duration-500 hover:border-brand-500 focus:ring-0 focus:border-brand-500 h-14 rounded-md w-full text-sm "
                    />
                    <label
                      htmlFor="name"
                      className="absolute transition-all left-3.5 top-1 text-[10px] font-medium text-brand-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-brand-500"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className="peer border-brand-700 bg-brand-800 transition ease-in-out duration-500 hover:border-brand-500 focus:ring-0 focus:border-brand-500 h-14 rounded-md w-full text-sm "
                    />
                    <label
                      htmlFor="name"
                      className="absolute transition-all left-3.5 top-1 text-[10px] font-medium text-brand-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-[18px] peer-placeholder-shown:text-brand-500"
                    >
                      Email
                    </label>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default NewCustomer;

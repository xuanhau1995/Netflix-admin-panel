import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
const BtnAction = () => {
  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm text-brand-300 bg-brand-light rounded-md hover:bg-brand-700 duration-500">
            Actions
            <ChevronDownIcon
              className="w-5 h-5 ml-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-30 rounded-md right-0 w-32 mt-2 bg-brand-light origin-top-right shadow-2xl">
            <div className="p-2 space-y-1">
              <Menu.Item>
                <Link to="/">
                  <button className="w-full h-9 flex justify-start items-center hover:bg-brand-700 rounded px-2 duration-500 text-brand-200">
                    View
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button className="w-full h-9 flex justify-start items-center text-brand-600 hover:bg-brand-700 rounded px-2 duration-500">
                  Delete
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default BtnAction;

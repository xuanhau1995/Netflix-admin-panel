import React, { Fragment, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/solid";

const times = [
  {
    title: "1 Hours",
  },
  {
    title: "2 Hours",
  },
  {
    title: "3 Hours",
  },
];
const SortLogin = () => {
  const [selected, setSelected] = useState(times[0]);
  return (
    <div className="relative justify-end flex">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative inline-flex items-center h-10 rounded-md bg-brand-light text-sm px-3 space-x-2 transition-all duration-500">
            <span>{selected.title}</span>
            <span>
              <ChevronDownIcon className="h-4" />
            </span>
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute bg-brand-light mt-12 rounded-md shadow-xl border border-brand-700 text-sm">
            {times.map((time, index) => (
              <Listbox.Option
                aria-hidden="true"
                value={time}
                key={index}
                className={({ active }) =>
                  `${active ? "text-brand-300 bg-brand-700" : "text-brand-500"}
                  cursor-default select-none relative py-2 pl-6 pr-6 flex items-center space-x-2`
                }
              >
                {({ selected, active }) => (
                  <>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-brand-300" : "text-brand-300"
                        } absolute inset-x-2`}
                      >
                        <CheckIcon className="h-4" aria-hidden="true" />
                      </span>
                    ) : null}
                    <span
                      className={`${
                        selected ? "font-semibold" : "font-normal"
                      } whitespace-nowrap`}
                    >
                      {time.title}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default SortLogin;

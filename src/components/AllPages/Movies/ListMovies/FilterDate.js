import { Listbox, Transition } from "@headlessui/react";
import { CalendarIcon, CheckIcon, FilterIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import { useState } from "react";
const date = [
  {
    id: "1",
    dateValue: "All the time",
  },
  {
    id: "1",
    dateValue: "1 Days ago",
  },
  {
    id: "2",
    dateValue: "1 Week ago",
  },
  {
    id: "1",
    dateValue: "1 Month ago",
  },
];
const FilterDate = () => {
  const [selectedDate, setSelectedDate] = useState(date[0]);
  return (
    <div>
      <Listbox value={selectedDate} onChange={setSelectedDate}>
        <div className="relative">
          <Listbox.Button className="btn-dark">
            <CalendarIcon className="h-4 text-brand-400" />
            <span className="flex">
              <p className="text-brand-400 mr-2">Date:</p>
              <p className="text-sm">{selectedDate.dateValue} </p>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="right-0 w-72 menu-show">
              {date.map((item, i) => (
                <Listbox.Option
                  key={i}
                  value={item}
                  className={({ selected }) =>
                    `${
                      selected
                        ? "bg-brand-800 text-brand-100"
                        : "text-brand-500"
                    } py-2 cursor-pointer hover:bg-brand-800 pl-10 pr-4 flex relative transition-all duration-500 text-sm rounded-md`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span>{item.dateValue}</span>

                      <span
                        className={`${
                          selected ? "text-brand-100 " : "text-brand-700"
                        } absolute inset-y-0 left-0 pl-3 flex items-center `}
                      >
                        <CheckIcon className="h-4" />
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
              <div className="space-y-2 mt-2">
                <p className="text-sm font-medium text-bran">Month:</p>
                <input
                  type="date"
                  placeholder=""
                  className="w-full h-12 focus:ring-0  border-0 bg-brand-800 rounded-md text-sm text-brand-300"
                />
              </div>
              <hr className="mt-3 mb-3 border-brand-800" />
              <div className="flex justify-end">
                <div>
                  <button className="h-12 px-3 rounded-md text-brand-300 text-sm">
                    Reset
                  </button>
                  <button className="h-12 bg-brand-700 font-medium px-4 rounded-md text-sm hover:bg-brand-800 transition duration-500">
                    Apply
                  </button>
                </div>
              </div>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default FilterDate;

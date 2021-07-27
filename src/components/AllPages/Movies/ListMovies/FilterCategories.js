import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useState } from "react";
const categories = [
  {
    id: 1,
    category: "Drama",
  },
  { id: 2, category: "Action" },
  { id: 3, category: "Category1" },
  { id: 4, category: "Category2" },
  { id: 5, category: "Category3" },
  { id: 6, category: "Category4" },
];
const FilterCategories = () => {
  const [selectedList, setSelectList] = useState(categories[0]);
  return (
    <Listbox value={selectedList} onChange={setSelectList}>
      <div className="relative">
        <Listbox.Button className="w-48 btn-dark">
          <span className="block truncate text-sm">
            {selectedList.category}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-10"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="menu-show p-1 py-3">
            {categories.map((item, i) => (
              <Listbox.Option
                key={i}
                value={item}
                className={({ selected, active }) =>
                  `${
                    selected ? "text-brand-100 bg-brand-800" : "text-brand-500"
                  } cursor-pointer select-none relative py-3 pl-10 pr-4 hover:bg-brand-800 rounded-md transition-all duration-500`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "text-brand-100" : "font-normal"
                      } block truncate`}
                    >
                      {item.category}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          selected ? "text-brand-100" : "text-brand-600"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3 `}
                      >
                        <CheckIcon className="w-4 h-4" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default FilterCategories;

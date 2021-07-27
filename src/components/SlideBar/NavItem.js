import React from "react";

function NavItem({ Icon, title, active, selected, setSelected }) {
  return (
    <div
      className={`flex h-10 items-center px-2 rounded-md space-x-2 hover:bg-brand-light transition-all duration-500 cursor-pointer group text-brand-500 mb-1 ${
        active ? " bg-brand-light text-white" : ""
      }`}
    >
      {Icon && (
        <Icon
          className={`h-6 group-hover:text-white transition-all duration-500 ${
            active && "text-white"
          }`}
        />
      )}
      <h1
        className={`text-sm group-hover:text-white transition-all duration-500 ${
          active && "text-white"
        }`}
      >
        {title}
      </h1>
    </div>
  );
}

export default NavItem;

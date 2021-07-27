import React from "react";
import NavItem from "./NavItem";
import {
  AccessAlarm,
  Feedback,
  Mail,
  Report,
  ShowChart,
  StrikethroughS,
  Theaters,
  SupervisedUserCircle,
  TrendingUp,
  MultilineChart,
  SupervisorAccount,
  Movie,
  MovieFilter,
} from "@material-ui/icons";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { ChatIcon, UserIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { navItems } from "./__nav";
const SlideBar = () => {
  return (
    <div className="bg-brand-dark2 border-r border-brand-800 w-72 sticky top-0 h-screen z-50">
      <div className="flex h-16 bg-black bg-opacity-10 items-center justify-center ">
        <Link to="/">
          <div>
            <img
              className="h-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <p className="text-xs font-bold justify-center flex">Admin</p>
          </div>
        </Link>
      </div>
      <div className="mx-4">
        <h1 className="text-xs py-4 tracking-wider uppercase text-brand-700 font-medium">
          Dashboard
        </h1>
        <Link to="/">
          <NavItem active={true} Icon={AssessmentIcon} title="Home" />
        </Link>
        <NavItem Icon={ShowChart} title="Analytics" />
        <NavItem Icon={TrendingUp} title="Sales" />
        <h1 className="text-xs py-4 tracking-wider uppercase text-brand-700 font-medium">
          Quick Menu
        </h1>
        <Link to="/customer">
          <NavItem Icon={SupervisorAccount} title="Customers" />
        </Link>
        <Link to="/movies">
          <NavItem Icon={Movie} title="Movies" />
        </Link>
        <Link to="/">
          <NavItem Icon={MovieFilter} title="Categories" />
        </Link>
        <NavItem Icon={StrikethroughS} title="Transactions" />
        <NavItem Icon={Report} title="Reports" />
        <h1 className="text-xs py-4 tracking-wider uppercase text-brand-700 font-medium">
          Notification
        </h1>
        <NavItem Icon={Mail} title="Mail" />
        <NavItem Icon={Feedback} title="Feedback" />
        <NavItem Icon={ChatIcon} title="Messages" />
        <h1 className="text-xs py-4 tracking-wider uppercase text-brand-700 font-medium">
          Staff
        </h1>
        <NavItem Icon={SupervisedUserCircle} title="Manage" />
        <NavItem Icon={MultilineChart} title="Analytics" />
      </div>
    </div>
  );
};

export default SlideBar;

import React from "react";
import { Theaters, AttachMoney, TrendingUp } from "@material-ui/icons";
import { UserGroupIcon } from "@heroicons/react/solid";
import Widgets from "./Widgets";
function StatictisWidgets() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Widgets
        title="Movies"
        desc="Compared to last mounth"
        Icon={Theaters}
        count="123.090K"
        increase="10%"
      />
      <Widgets
        title="Users"
        desc="Compared to last mounth"
        Icon={UserGroupIcon}
        count="123.090K"
        increase="80%"
      />
      <Widgets
        title="Sales"
        desc="Compared to last mounth"
        Icon={AttachMoney}
        count="123.090K"
        reduction="0%"
      />
      <Widgets
        title="Cost"
        desc="Compared to last mounth"
        Icon={TrendingUp}
        count="123.090K"
        increase="0.5%"
      />
    </div>
  );
}

export default StatictisWidgets;

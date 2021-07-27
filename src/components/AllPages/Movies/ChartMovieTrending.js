import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
  AreaChart,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import { DateRange, LineStyle } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    Movies: 1 + Math.random(),
    // value2: 1 - Math.random(),
  });
}

function ChartMovieTrending() {
  const [sortType, SetSortType] = useState("year");
  useEffect(() => {
    switch (sortType) {
      case "year":
        break;
      case "month":
        break;
      case "day":
        break;
    }
  }, []);
  return (
    <div className="card-light">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h1 className="text-lg font-semibold">Movies Trendding</h1>
          <p className="text-xs text-gray-500">User active last month</p>
        </div>
        <div className="space-x-1">
          <button
            onClick={() => SetSortType("year")}
            className={`text-sm h-10 px-4 rounded-lg transition-all duration-500 ${
              sortType === "year"
                ? "bg-brand-light text-white"
                : "text-brand-500"
            }`}
          >
            Year
          </button>
          <button
            onClick={() => SetSortType("month")}
            className={`text-sm h-10 px-4 rounded-lg transition-all duration-500 ${
              sortType === "month"
                ? "bg-brand-light text-brand-50"
                : "text-brand-500"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => SetSortType("week")}
            className={`text-sm h-10 px-4 rounded-lg transition-all duration-500 ${
              sortType === "week"
                ? "bg-brand-light text-brand-50"
                : "text-brand-500"
            }`}
          >
            Week
          </button>
        </div>
      </div>
      <div className="py-6">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey="Movies"
              stroke="#2451B7"
              fill="url(#color)"
              type="monotone"
            />
            {/* <Area dataKey="value2" stroke="#2451B7" fill="url(#color)" /> */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
            <YAxis
              dataKey="Movies"
              axisLine={false}
              tickLine={false}
              tickCount={6}
              tickFormatter={(number) => `${number.toFixed(2)}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid opacity={0.1} vertical={false} />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <>
        <div className="rounded-lg bg-brand-800 text-brand-50 p-3 shadow-lg ">
          <h1 className="text-sm text-brand-500">
            {format(parseISO(label), "eeee, d MMM, yyyy")}
          </h1>
          <p className="text-lg">{payload[0].value.toFixed(2)}K View</p>
          {/* <p className="text-lg">{payload[0].value.toFixed(2)} USA</p> */}
        </div>
      </>
    );
  }
  return null;
}
export default ChartMovieTrending;

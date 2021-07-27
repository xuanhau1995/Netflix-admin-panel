import React from "react";
import SortLogin from "./LoginSession/SortLogin";

const loginSession = [
  {
    location: "USA(5)",
    status: "active",
    device: "	Chrome - Windows",
    ipaddress: "	236.125.56.78",
    time: "2 mins ago",
  },
  {
    location: "USA(5)",
    status: "err",
    device: "	Chrome - Windows",
    ipaddress: "	236.125.56.78",
    time: "2 mins ago",
  },
  {
    location: "USA(5)",
    status: "wrn",
    device: "	Chrome - Windows",
    ipaddress: "	236.125.56.78",
    time: "2 mins ago",
  },
];
const LoginSession = () => {
  return (
    <div className="card-light">
      <div className="flex justify-between items-center">
        <h1>Login Sessions</h1>
        <div className="flex space-x-3">
          <SortLogin />
          <button className="h-10 rounded-md bg-brand-light text-brand-100 hover:bg-brand-700 transition-all duration-500 text-sm px-3">
            View All
          </button>
        </div>
      </div>
      <div>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-dashed border-brand-800 cell-th h-14">
              <th align="left">Location</th>
              <th align="left"> Status</th>
              <th align="left">Device</th>
              <th align="left">IP Address </th>
              <th align="left">Time</th>
            </tr>
          </thead>
          <tbody>
            {loginSession.map((session, index) => (
              <>
                <tr className="h-14  border-b border-dashed border-brand-800 cell-td">
                  <td align="left">{session.location}</td>
                  <td>
                    {session.status === "active" && (
                      <p className="active-tag">OK</p>
                    )}
                    {session.status === "err" && (
                      <p className="pending-tag">ERR</p>
                    )}
                    {session.status === "wrn" && (
                      <p className="danger-tag">WRN</p>
                    )}
                  </td>
                  <td>{session.device}</td>
                  <td>{session.ipaddress}</td>
                  <td>{session.time}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginSession;

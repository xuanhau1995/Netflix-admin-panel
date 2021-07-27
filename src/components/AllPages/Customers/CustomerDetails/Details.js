import React from "react";

const Details = ({ title, details, status }) => {
  return (
    <div className="flex justify-between space-x-2">
      <p className="text-sm text-brand-300 whitespace-nowrap">{title}</p>
      {status && (
        <div className="flex justify-end">
          <p className="active-tag">{status}</p>
        </div>
      )}
      {details && (
        <p className="flex text-right text-sm text-brand-500">{details}</p>
      )}
    </div>
  );
};

export default Details;

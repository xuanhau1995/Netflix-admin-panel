import React from "react";

const Security = () => {
  return (
    <div className="card-light">
      <h1>Sign-in Method</h1>
      <hr className="border-brand-800 my-4 border-dashed" />
      <div className="space-y-6">
        <div className="flex justify-between">
          <p className="text-sm text-brand-300">Email</p>
          <p className="text-sm text-brand-500">support@keenthemes.com</p>
        </div>
        <div className="flex justify-between">
          <span>
            <p className="text-sm text-brand-300">Password</p>
            <p className="text-sm text-brand-500">********</p>
          </span>
          <button className="p-3 rounded-md bg-brand-light text-xs text-brand-400 hover:bg-brand-800">
            Reset password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;

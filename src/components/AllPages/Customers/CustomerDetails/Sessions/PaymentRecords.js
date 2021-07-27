import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BtnSortbyDate from "./BtnSortbyDate";
const paymentRecordDemo = [
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: false,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: false,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
  {
    invoice: "1234 3456",
    status: true,
    amount: "23.989$",
    date: "Thur, 02/12/21",
  },
];

const PaymentRecords = () => {
  return (
    <div className="card-light">
      {/* header */}
      <div className="flex justify-between items-center">
        <div>
          <h1>Payment Records</h1>
        </div>
        <div>
          <BtnSortbyDate />
        </div>
      </div>

      {/* Table */}
      <div>
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-dashed border-brand-800 cell-th h-14">
              <th align="left">INVOICE NO.</th>
              <th align="left">STATUS</th>
              <th align="left">AMOUNT</th>
              <th align="left">DATE</th>
              <th align="right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {paymentRecordDemo.map((payment, index) => (
              <>
                <tr className="h-14  border-b border-dashed border-brand-800 cell-td">
                  <td align="left">{payment.invoice}</td>
                  <td>
                    {payment.status ? (
                      <p className="active-tag">Successfully</p>
                    ) : (
                      <p className="pending-tag">Pending</p>
                    )}
                  </td>
                  <td>{payment.amount}</td>
                  <td>{payment.date}</td>
                  <td align="right">
                    <p className="h-8 text-xs bg-brand-light px-2 rounded inline-flex justify-center items-center">
                      Actions
                    </p>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentRecords;

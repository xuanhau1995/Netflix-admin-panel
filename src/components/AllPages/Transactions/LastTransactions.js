import React from "react";
import Transactions from "./Transactions";
import { TransactionsUser } from "./DataFake";
function LastTransactions() {
  return (
    <div className="bg-brand-dark2 py-6 border border-brand-800 rounded-lg h-full">
      <div className="pb-4 px-6">
        <h1 className="text-xl font-bold text-blue-500">12.909$</h1>
        <h1 className="text-xs text-brand-500">Lastest Transactions</h1>
      </div>
      <div>
        {TransactionsUser.map((transaction, i) => (
          <Transactions
            key={transaction}
            name={transaction.name}
            status={transaction.status}
            avatar={transaction.avatar}
            typeAccount={transaction.typeAccount}
            timestamp={transaction.timestamp}
            income={transaction.income}
          />
        ))}
      </div>
    </div>
  );
}

export default LastTransactions;

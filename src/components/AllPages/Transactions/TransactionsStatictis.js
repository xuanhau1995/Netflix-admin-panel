import React from "react";
import ChartTransactions from "./ChartTransactions";
import LastTransactions from "./LastTransactions";
function TransactionsStatictis() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-4">
        <LastTransactions />
      </div>
      <div className="col-span-8">
        <ChartTransactions />
      </div>
    </div>
  );
}

export default TransactionsStatictis;

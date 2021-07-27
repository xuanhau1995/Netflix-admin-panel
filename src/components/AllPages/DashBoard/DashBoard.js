import React from "react";
import RecentlyTransactions from "../Transactions/ChartTransactions";
import StatictisWidgets from "../Widgets/StatictisWidgets";
import MovieTrending from "../Movies/MovieTrending";
import TransactionsStatictis from "../Transactions/TransactionsStatictis";
function DashBoard() {
  return (
    <div className="space-y-6">
      <StatictisWidgets />
      <TransactionsStatictis />
      <MovieTrending />
    </div>
  );
}

export default DashBoard;

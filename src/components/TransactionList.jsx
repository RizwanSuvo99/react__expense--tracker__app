import { useContext } from "react";
import { GlobalBalanceTrackerContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalBalanceTrackerContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

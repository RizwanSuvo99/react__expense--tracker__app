/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { GlobalBalanceTrackerContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalBalanceTrackerContext);
  const totalAmount = transactions.reduce(
    (acc, curr) => (acc += +curr.amount),
    0
  );

  return (
    <>
      <h4>Your Balance</h4>
      <h1>Total: ${totalAmount}</h1>
    </>
  );
};

export default Balance;

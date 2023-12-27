/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { deleteTransaction } from "../reducer/actions";
import { GlobalBalanceTrackerContext } from "../context/GlobalState";

/* eslint-disable react/prop-types */
const Transaction = ({ transaction: { id, text, amount } }) => {
  const {dispatch} = useContext(GlobalBalanceTrackerContext);
  const sign = amount > 0 ? "+" : "-";
  
  return (
    <li className={amount > 0 ? "plus" : "minus" }>
      {text}
      <span>
        {sign} {Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={()=>deleteTransaction(id,dispatch)}>x</button>
    </li>
  );
};

export default Transaction;

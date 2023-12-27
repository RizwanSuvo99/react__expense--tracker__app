/* eslint-disable no-case-declarations */
import { ADD__TRANSACTION, DELETE__TRANSACTION } from "./actionTypes";

/* eslint-disable no-unused-vars */
export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD__TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case DELETE__TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

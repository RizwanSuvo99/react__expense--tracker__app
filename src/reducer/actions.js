import { ADD__TRANSACTION, DELETE__TRANSACTION } from "./actionTypes";

export const addTransaction = (transaction, dispatch) => {
  dispatch({
    type: ADD__TRANSACTION,
    payload: transaction,
  });
};

export const deleteTransaction = (id, dispatch) =>  {
  dispatch({
    type: DELETE__TRANSACTION,
    payload: id,
  });
}




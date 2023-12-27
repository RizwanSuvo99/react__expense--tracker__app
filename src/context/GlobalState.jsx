/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "../reducer/reducer";
import { initialState } from "../reducer/initialState";

export const GlobalBalanceTrackerContext = createContext(initialState);
export const GlobalBalanceTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    dispatch,
    transactions: state.transactions,
  };

  return (
    <GlobalBalanceTrackerContext.Provider value={values}>
      {children}
    </GlobalBalanceTrackerContext.Provider>
  );
};

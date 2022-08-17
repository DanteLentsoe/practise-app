import React, { createContext, useReducer } from "react";
import { ExpenseData } from "../../constants/types";
type Actions = {
  payload: ExpenseData[];
  type: string;
};

export const ExpensesContext = createContext({
  expenses: [] as ExpenseData[],
  addExpense: ({ description, amount, date }: ExpenseData) => {},
  setExpenses: (expenses: ExpenseData[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    { description, amount, date }: ExpenseData,
    token: string
  ) => {},
});

const expensesReducer = (
  state: ExpenseData[],
  action: { type: string; payload: string | any }
) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse() as ExpenseData[];
      return inverted;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense: ExpenseData) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter(
        (expense: ExpenseData) => expense.id !== action.payload
      );
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }: any) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData: ExpenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const setExpenses = (expenses: ExpenseData[]) => {
    dispatch({ type: "SET", payload: expenses });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (
    id: string,
    expenseData: ExpenseData,
    token: string
  ) => {
    dispatch({
      type: "UPDATE",
      payload: { id: id, data: expenseData, token: token },
    });
  };

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;

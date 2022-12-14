import React from "react";
import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../provider/ExpenseProvider";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="Total"
        fallbackText="No registered expenses found!"
      />
    </>
  );
};

export default AllExpenses;

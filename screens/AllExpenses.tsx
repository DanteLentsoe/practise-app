import React from "react";
import { useContext } from "react";
import * as Notifications from "expo-notifications";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});
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

import React from "react";
import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet, Text, View } from "react-native";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpenseData } from "../constants/types";
import { AuthContext } from "../provider/AuthProvider";
import { ExpensesContext } from "../provider/ExpenseProvider";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import theme from "../util/theme";
import EmptySVG from "../assets/SVG/EmptySVG";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses(authCtx.token);
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    };

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay message="Loading" />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense: ExpenseData) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense?.date >= date7DaysAgo && expense?.date <= today;
  });

  return (
    <>
      {recentExpenses.length > 0 ? (
        <>
          <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>
            No Recent Expenses in the last 7 days
          </Text>
          <View style={styles.emptyContainer}>
            <EmptySVG />
          </View>
        </>
      )}
    </>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginTop: 55,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 5,
    color: theme.colors.primary,
    marginBottom: 40,
  },
  emptyContainer: {
    height: 300,
    marginTop: 100,
  },
});

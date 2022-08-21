import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import EmptySVG from "../assets/SVG/EmptySVG";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../provider/ExpenseProvider";
import theme from "../util/theme";

const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <>
      {expensesCtx.expenses.length > 0 ? (
        <>
          <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
          />
        </>
      ) : (
        <>
          <Text style={styles.title}>No Recoreded Expenses</Text>
          <View style={styles.emptyContainer}>
            <EmptySVG />
          </View>
        </>
      )}
    </>
  );
};

export default AllExpenses;

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

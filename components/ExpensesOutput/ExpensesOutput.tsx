import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ExpenseData } from "../../constants/types";
import theme from "../../util/theme";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type ExpenseListData = {
  expenses: ExpenseData[];
  expensesPeriod: string;
  fallbackText: string;
};
const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpenseListData) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: theme.colors.secondary,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});

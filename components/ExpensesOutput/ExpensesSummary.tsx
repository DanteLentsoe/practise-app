import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ExpenseData } from "../../constants/types";
import { deviceWeight } from "../../util/DeviceAPI";
import theme from "../../util/theme";

type ExpenseSummaryData = {
  expenses: ExpenseData[];
  periodName: string;
};
const ExpensesSummary = ({ expenses, periodName }: ExpenseSummaryData) => {
  const expensesSum = expenses.reduce(
    (sum: number, expense: { amount: number }) => {
      return sum + expense.amount;
    },
    0
  );

  return (
    <View style={styles.container}>
      <AntDesign name="calendar" size={35} color={theme.colors.primary} />
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    textAlign: "center",
    paddingHorizontal: 22,
    elevation: 4,
    shadowColor: "#E6EAF8",
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    borderRadius: 25,
    fontSize: 16,
    height: 75,
    width: (deviceWeight * 88) / 100,
  },
  period: {
    fontSize: 16,
    color: "#6b6868",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

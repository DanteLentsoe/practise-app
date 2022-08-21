import React from "react";
import { FlatList } from "react-native";
import { ExpenseData } from "../../constants/types";
import ExpenseItem from "./ExpenseItem";

type ExpenseDataType = {
  expenses: ExpenseData[];
};

const renderExpenseItem = (itemData: { item: ExpenseData }) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }: ExpenseDataType) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

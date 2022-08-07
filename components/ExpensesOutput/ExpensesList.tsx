import React from "react";
import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData: { item: any }) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }: any) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

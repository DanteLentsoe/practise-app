import React from "react";
import { FlatList } from "react-native";
import { ExpenseData } from "../../constants/types";

import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData: { item: any }) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

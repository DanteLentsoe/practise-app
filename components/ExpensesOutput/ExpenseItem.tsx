import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../../util/date";
import React from "react";
import { ExpenseData } from "../../constants/types";
import theme from "../../util/theme";

const ExpenseItem = ({ id, description, amount, date }: ExpenseData) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View style={styles.infoContainer}>
          <Text style={[styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date as Date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowRadius: 4,

    paddingTop: 40,
    textAlign: "center",
    paddingHorizontal: 6,
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "#E6EAF8",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 10,
    },
    borderRadius: 25,
    fontSize: 16,
    height: 75,
  },
  textBase: {
    color: "#777474",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: theme.colors.primary,
    fontWeight: "bold",
    paddingBottom: Platform.OS === "ios" ? 35 : 0,
    bottom: Platform.OS === "android" ? 14 : 0,
  },
  infoContainer: {
    top: -22,
    left: 12,
  },
});

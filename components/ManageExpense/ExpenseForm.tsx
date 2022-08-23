import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";
import theme from "../../util/theme";
import Toast from "react-native-root-toast";
import DatePicker from "react-native-datepicker";
import { deviceWeight } from "../../util/DeviceAPI";

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}: any) => {
  console.log("DEFAULT VALUES ", onSubmit);
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputChangedHandler = (inputIdentifier: any, enteredValue: any) => {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input values");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            right: 135,
            color: "#817e7e",
            marginBottom: 4,
          }}>
          {" "}
          Date
        </Text>
        <DatePicker
          date={inputs.date.value} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="YYYY-MM-DD"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          style={{
            color: GlobalStyles.colors.primary700,
            padding: 6,
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
            width: (deviceWeight * 80) / 100,
          }}
          customStyles={{
            dateText: {
              color: theme.colors.primary,
              fontSize: 16,
            },
            dateIcon: {
              right: 0,
              top: -22,
            },
            dateInput: {
              alignItems: "center",
              marginLeft: 40,
              borderWidth: 0,
            },
          }}
          onDateChange={inputChangedHandler.bind(this, "date")}
        />

        <Input
          label="Description"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            multiline: true,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
      </View>

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={{ ...styles.button }} mode="flat" onPress={onCancel}>
          {"Cancel"}
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
    color: theme.colors.primary,
  },
  inputsRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowInput: {
    // flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

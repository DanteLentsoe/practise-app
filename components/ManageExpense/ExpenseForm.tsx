import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { AntDesign } from "@expo/vector-icons";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";
import theme from "../../util/theme";
import Toast from "react-native-root-toast";
import DatePicker from "react-native-datepicker";
import { deviceHeight, deviceWeight } from "../../util/DeviceAPI";
import SelectDropdown from "react-native-select-dropdown";

type ExpenseFormProps = {
  defaultValues: {
    amount: number;
    date: Date;
    description: string;
    expenseCategory: string;
    id: string;
  };
  onCancel: () => void;
  onSubmit: ({}) => void;
  submitButtonLabel: string;
};
const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}: ExpenseFormProps) => {
  const expenseTypes = [
    "Housing",
    "Food and dining out",
    "Transportation",
    "Child care and pet care",
    "Cellphone",
    "Health insurance",
    "Debt payments",
    "Entertainment",
    "Utilities",
  ];

  const [inputs, setInputs] = useState({
    expenseCategory: {
      value: defaultValues ? defaultValues.expenseCategory : "",
      isValid: true,
    },
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

  const inputChangedHandler = (
    inputIdentifier: string | number,
    enteredValue: string | number | Date
  ) => {
    console.log("IDENTIFIER ", enteredValue);
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      expenseCategory: inputs.expenseCategory.value as string,
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value as string,
    };

    const expenseCategoryIsValid = expenseData.description.trim().length > 0;
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (
      !amountIsValid ||
      !dateIsValid ||
      !descriptionIsValid ||
      !expenseCategoryIsValid
    ) {
      Alert.alert("Invalid input", "Please check your input values");
      setInputs((curInputs) => {
        return {
          expenseCategory: {
            value: curInputs.expenseCategory.value,
            isValid: expenseCategoryIsValid,
          },
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
        <Text
          style={{
            marginTop: 10,
            fontSize: 12,
            right: 95,
            color: "#817e7e",
            marginBottom: 4,
          }}>
          {" "}
          Expense Category
        </Text>
        <SelectDropdown
          data={expenseTypes}
          defaultValue={inputs.expenseCategory.value}
          buttonTextStyle={{ color: theme.colors.primary }}
          dropdownIconPosition={"right"}
          renderDropdownIcon={() => (
            <AntDesign
              name="caretdown"
              size={20}
              style={styles.dropDownIcon}
              color={theme.colors.primary}
            />
          )}
          buttonStyle={{
            padding: 6,
            paddingTop: 40,
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
            height: 75,
            width: (deviceWeight * 80) / 100,
          }}
          dropdownStyle={{
            // color: GlobalStyles.colors.primary700,
            // alignItems: "center",
            padding: 6,
            paddingTop: 40,
            // textAlign: "center",
            // paddingHorizontal: 6,
            // backgroundColor: "#ffffff",
            elevation: 4,
            shadowColor: "#E6EAF8",
            shadowOpacity: 1,
            // shadowOffset: {
            //   width: 3,
            //   height: 10,
            // },
            borderRadius: 25,
            // fontSize: 16,
            // height: 75,
            // width: (deviceWeight * 80) / 100,
          }}
          onSelect={(selectedItem: string) => {
            setInputs((curInputs) => {
              return {
                ...curInputs,
                ["expenseCategory"]: { value: selectedItem, isValid: true },
              };
            });
          }}
          buttonTextAfterSelection={(selectedItem: string) => {
            return selectedItem;
          }}
          rowTextForSelection={(item: string) => {
            return item;
          }}
        />
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
    flex: 1,
    height: deviceHeight,
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
  dropDownIcon: {
    bottom: 15,
    left: 10,
  },
});

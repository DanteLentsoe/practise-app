import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { deviceWeight } from "../../util/DeviceAPI";

type InputTypes = {
  label?: string;
  invalid?: boolean;
  style?: {
    flex: number;
    inputContainer: {
      marginHorizontal: number;
      marginVertical: number;
    };
    label: {
      fontSize: number;
      color: string;
      marginBottom: number;
    };
    input: {
      backgroundColor: string;
      color: string;
      padding: number;
      borderRadius: number;
      fontSize: number;
    };
    inputMultiline: {
      minHeight: number;
      textAlignVertical: "top";
    };
    invalidLabel: {
      color: string;
    };
    invalidInput: {
      backgroundColor: string;
    };
  };
  textInputConfig: {
    keyboardType?: string;
    onChangeText?: (inputIdentifier: any, enteredValue: any) => void;
    value?: string;
    maxLength?: number;
    placeholder: string | Date;
    multiline: true;
  };
};

const Input = ({ label, invalid, style, textInputConfig }: InputTypes) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
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
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});

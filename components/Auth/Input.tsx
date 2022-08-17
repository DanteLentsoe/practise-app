import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { deviceWeight } from "../../util/DeviceAPI";

type InputTypes = {
  label: string;
  keyboardType: undefined | KeyboardTypeOptions;
  secure: boolean;
  onUpdateValue: (text: string) => void;
  value: undefined | string;
  isInvalid: boolean;
};

const Input = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}: InputTypes) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        textAlignVertical="bottom"
        style={[styles.input]}
        autoCapitalize={"none"}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "#929292",
    top: -65,
    left: 20,
  },
  labelInvalid: {
    color: "red",
  },
  input: {
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
});

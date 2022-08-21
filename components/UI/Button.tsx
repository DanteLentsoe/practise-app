import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ReactChildrenType } from "../../constants/types";
import theme from "../../util/theme";

type GenericButtonTypes = {
  children: ReactChildrenType;
  onPress?: () => void;
  mode?: string | undefined;
  style?: {
    marginHorizontal?: number | string;
    minWidth?: number | string;
  };
};
const Button = ({ children, onPress, mode, style }: GenericButtonTypes) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    padding: 8,
    backgroundColor: theme.colors.primary,
    height: 50,
  },
  flat: {
    backgroundColor: "#ebe6e6",
    color: "white",
  },
  buttonText: {
    justifyContent: "center",
    marginTop: 8,
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: theme.colors.primary,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});

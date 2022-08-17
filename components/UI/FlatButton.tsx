import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { deviceHeight } from "../../util/DeviceAPI";
type FlatButtonTypes = {
  children: string;
  onPress: () => void;
};
const FlatButton = ({ children, onPress }: FlatButtonTypes) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View
        style={{
          marginBottom:
            children === "Create a new user"
              ? (deviceHeight * 30) / 100
              : (deviceHeight * 6) / 100,
        }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "#787779",
  },
});

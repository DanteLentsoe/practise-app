import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ErrorSVG from "../../assets/SVG/ErrorSVG";
import theme from "../../util/theme";

const ErrorOverlay = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 450, width: 750 }}>
        <ErrorSVG />
      </View>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

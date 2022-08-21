import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import LoadingSVG from "../../assets/SVG/LoadingSVG";
import theme from "../../util/theme";

const LoadingOverlay = ({ message }: { message?: string }) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 300, width: 350, alignItems: "center", left: 50 }}>
        <LoadingSVG />
      </View>

      <ActivityIndicator size="large" color={theme.colors.secondary} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: theme.colors.primary,
  },
  loadingText: {
    fontSize: 25,
    letterSpacing: 8,
    top: 15,
    color: theme.colors.secondary,
  },
});

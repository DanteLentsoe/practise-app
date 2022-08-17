import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import theme from "../../util/theme";
import React from "react";
import { useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Credentials } from "../../constants/types";
import { deviceHeight, deviceWeight } from "../../util/DeviceAPI";

import FlatButton from "../UI/FlatButton";
import AuthForm from "./AuthForm";

const AuthContent = ({
  isLogin,
  onAuthenticate,
}: {
  isLogin: boolean | undefined;
  onAuthenticate: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
}) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const navigation = useNavigation();

  const switchAuthModeHandler = () => {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  };

  const submitHandler = (credentials: Credentials) => {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim() as string;
    password = password.trim() as string;

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  };

  return (
    <View style={styles.container}>
      <View
        style={{ alignItems: "center", marginTop: (deviceHeight * 12) / 100 }}>
        <Image
          source={require("../../assets/FinDome_Logo.jpg")}
          style={{ height: 120, width: 120, borderRadius: 100 }}
        />
      </View>
      <AuthForm
        isLogin={isLogin as boolean}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    width: deviceWeight,
    backgroundColor: theme.colors.secondary,
  },
  buttons: {
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
});

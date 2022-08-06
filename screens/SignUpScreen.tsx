import React, { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { registerUser } from "../util/auth";
import { Alert } from "react-native";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { UserAuthInfo } from "../constants/types";

const SignupScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUserHandler = async ({ email, password }: UserAuthInfo) => {
    setIsAuthenticated(true);
    try {
      await registerUser(email, password);
    } catch (error) {
      Alert.alert("AUTH error", `Registering failed due to ${error}`);
    }
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Registering User" />;
  }
  return (
    <AuthContent isLogin={undefined} onAuthenticate={registerUserHandler} />
  );
};

export default SignupScreen;

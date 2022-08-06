import React, { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { registerUser } from "../util/auth";
import { Alert } from "react-native";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { UserAuthInfo } from "../constants/types";
import { AuthContext } from "../provider/AuthProvider";

const SignupScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const registerUserHandler = async ({ email, password }: UserAuthInfo) => {
    setIsAuthenticated(true);
    try {
      const token = await registerUser(email, password);
      AuthCtx.authenticated(token);
    } catch (error) {
      Alert.alert("AUTH error", `Registering failed due to ${error}`);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Registering User" />;
  }
  return (
    <AuthContent isLogin={undefined} onAuthenticate={registerUserHandler} />
  );
};

export default SignupScreen;

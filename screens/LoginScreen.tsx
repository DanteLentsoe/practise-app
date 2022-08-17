import React, { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { UserAuthInfo } from "../constants/types";
import { loginUser } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../provider/AuthProvider";

const LoginScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AuthCtx = useContext(AuthContext);

  const loginUserHandler = async ({ email, password }: UserAuthInfo) => {
    setIsAuthenticated(true);
    try {
      const token = await loginUser(email, password);

      AuthCtx.authenticated(token);
    } catch (error) {
      Alert.alert("AUTH error", `Auth failed due to ${error}`);
      setIsAuthenticated(false);
    }
  };

  if (isAuthenticated) {
    return <LoadingOverlay message="Logging in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginUserHandler} />;
};

export default LoginScreen;

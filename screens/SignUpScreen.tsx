import React from "react";
import AuthContent from "../components/Auth/AuthContent";
import { registerUser } from "../util/auth";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const SignupScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUserHandler = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setIsAuthenticated(true);
    await registerUser(email, password);
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

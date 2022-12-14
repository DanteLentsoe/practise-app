import { createContext, useState } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
  token: "",
  isAuthtenticated: false,
  authenticated: (token: string) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: any) => {
  const [authToken, setAuthToken] = useState<
    string | undefined | null | boolean
  >(undefined);

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem("@token", token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("@token");
  };

  const value = {
    token: authToken as string,
    isAuthtenticated: !!authToken,
    authenticated: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

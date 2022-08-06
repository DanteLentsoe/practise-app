import { createContext, useState } from "react";
import React from "react";
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
  };

  const logout = () => {
    setAuthToken(null);
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

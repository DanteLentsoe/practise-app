import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import ExpensesContextProvider from "./provider/ExpenseProvider";
import AuthContextProvider from "./provider/AuthProvider";
import * as Notifications from "expo-notifications";
import Root from "./navigation";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

const App = () => {
  useEffect(() => {
    const triggerNotifications = () => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Expense Logging",
          body: "Look at you expenses and clean up your log",
          data: {
            userName: "Dante",
          },
        },

        trigger: {
          seconds: 5,
        },
      });
    };

    const subscription = triggerNotifications();
  }, []);
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <ExpensesContextProvider>
          <Root />
        </ExpensesContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;

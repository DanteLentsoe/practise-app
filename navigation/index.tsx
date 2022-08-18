import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import ManageExpense from "../screens/ManageExpense";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { AuthContext } from "../provider/AuthProvider";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignUpScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();
const Auth = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: "green" },
        headerTintColor: "white",
      }}
      initialRouteName="login">
      <Auth.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Auth.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </Auth.Navigator>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: "white",
        }}
        initialRouteName="ExpensesOverview">
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageExpense"
          component={ManageExpense}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const ExpensesOverview = () => {
  const authCtx = useContext(AuthContext);
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
        headerLeft: ({ tintColor }) => (
          <IconButton
            icon="log-out-outline"
            size={24}
            color={tintColor}
            onPress={() => {
              authCtx.logout();
            }}
          />
        ),
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const Navigation = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <NavigationContainer>
        {authCtx.isAuthtenticated ? <AuthenticatedRoutes /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

const Root = () => {
  const authCtx = useContext(AuthContext);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      const storeToken = await AsyncStorage.getItem("@token");

      if (storeToken) {
        authCtx.authenticated(storeToken);
      }

      setIsLoggingIn(false);
    };
    getToken();
  }, []);

  if (isLoggingIn) {
    <AppLoading />;
  }
  return (
    <>
      <Navigation />
    </>
  );
};

export default Root;

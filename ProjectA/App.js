import React from "react";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import SingleProductScreen from "./src/Screen/SingleProductScreen";
import CartScreen from "./src/Screen/CartScreen";
import ProfileScreen from "./src/Screen/ProfileScreen";
import ShippingScreen from "./src/Screen/ShippingScreen";
import PaymentScreen from "./src/Screen/PaymentScreen";
import LoginScreen from "./src/Screen/LoginScreen";
import PlaceOrderScreen from "./src/Screen/PlaceOrderScreen";
import OrderScreen from "./src/Screen/OrderScreen";
import RegisterScreen from "./src/Screen/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/Navigations/BottomNav";
import ScannerScreen from "./src/Screen/ScannerScreen";
const Stack = createNativeStackNavigator();
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Scan" component={ScannerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

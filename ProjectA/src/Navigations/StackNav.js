import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShippingScreen from "../Screen/ShippingScreen";
import PaymentScreen from "../Screen/PaymentScreen";
import PlaceOrderScreen from "../Screen/PlaceOrderScreen";
import HomeScreen from "../Screen/HomeScreen";
import SingleProductScreen from "../Screen/SingleProductScreen";
import NotVerifyScreen from "../Screen/NotVerifyScreen";
import ScannerScreen from "../Screen/ScannerScreen";
import CartScreen from "../Screen/CartScreen";
import OrderModel from "../../components/OrderModel";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home "
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Checkout" component={PaymentScreen} />
      <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
      <Stack.Screen name="Notverify" component={NotVerifyScreen} />
      <Stack.Screen name="Scan" component={ScannerScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

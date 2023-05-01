import React from "react";
import { ScrollView, View, Box, Heading } from "native-base";
import Colors from "../Colors";
import OrderInfo from "../../components/OrderInfo"; //Alias path import
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderIterm from "../../components/OrderIterm";
import PlaceOrderModel from "../../components/PlaceOrderModel";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Rondeptrai"
            text="admin@provip.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipper: LilPhuc"
            text="Pay Method: E-Wallet"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVERY TO"
            subTitle="Address:"
            text="Hoa Quy, Ngu Hanh Son, Da Nang"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderIterm />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;

import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  ScrollView,
  VStack,
  Text,
  Input,
  Select,
  Image,
} from "native-base";
import Colors from "../Colors";
import Buttone from "../../components/Buttone";
import { useNavigation } from "@react-navigation/native";


function PaymentScreen() {
  const navigation = useNavigation()
  const [selectedMethod, setselectedtMethod] = useState("");

  const handlePaymentMethodChange = (value) => {
    setselectedtMethod(value);
  };

  return (
    <Box flex={1} safeAreaTop bg={Colors.red} py={5}>
      {/*header*/}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHODS
        </Text>
      </Center>
      {/*Inputs*/}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            <Select
              placeholder="Select payment method"
              onValueChange={handlePaymentMethodChange}
              value={selectedMethod}
            >
              <Select.Item label="1-Payment on delivery" value="1" Image />
              <Select.Item label="2-Bank" value="2" />
              <Select.Item label="3-E-Wallet" value="3" />
            </Select>
            {selectedMethod === "2" && (
              <Box>
                <Text color={Colors.main} fontWeight="bold" mb={2}>
                  Bank Transfer Details:
                </Text>
                <Text color={Colors.main} mb={2}>
                  Bank Name: MB Bank
                </Text>
                <Text color={Colors.main} mb={2}>
                  Account Name: TON THAT RON
                </Text>
                <Text color={Colors.main} mb={2}>
                  Account Number: 01000001052003
                </Text>
                <Image
                  source={require("../../assets/QRbankjpg.jpg")}
                  alt="Bank Transfer QR Code"
                  size="150px"
                  resizeMode="contain"
                  mt={5}
                />
              </Box>
            )}
            {selectedMethod === "3" && (
              <Box>
                <Text color={Colors.main} fontWeight="bold" mb={2}>
                  E-wallet Transfer Details:
                </Text>
                <Text color={Colors.main} mb={2}>
                  E-wallet Name: Momo
                </Text>
                <Text color={Colors.main} mb={2}>
                  Account Name: TON THAT RON
                </Text>
                <Text color={Colors.main} mb={2}>
                  Account Number: 0903523826
                </Text>
                <Image
                  source={require("../../assets/QRmomo.jpg")}
                  alt="E-wallet Transfer QR Code"
                  size="150px"
                  resizeMode="contain"
                  mt={5}
                />
              </Box>
            )}
            <Buttone
              onPress={() => navigation.navigate("Placeorder")}
              bg={Colors.red}
              color={Colors.white}
              mt={5}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;

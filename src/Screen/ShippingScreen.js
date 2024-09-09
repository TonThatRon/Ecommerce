import React from "react";
import {
  Box,
  Center,
  FormControl,
  ScrollView,
  VStack,
  Text,
  Input,
} from "native-base";
import Colors from "../Colors";
import Buttone from "../../components/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "ENTER PHONE NUMBER",
    type: "number",
  },
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER DISTRICT",
    type: "text",
  },
  {
    label: "ENTER WARD",
    type: "text",
  },
  {
    label: "ENTER STREET",
    type: "text",
  },
];
function ShippingScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.red} py={5}>
      {/*header*/}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/*Inputs*/}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color="black"
                  _focus={{
                    bg: Colors.white,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => navigation.navigate("Checkout")}
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

export default ShippingScreen;

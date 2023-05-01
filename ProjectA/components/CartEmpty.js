import { Center, Box, Text } from "native-base";
import React from "react";
import Colors from "../src/Colors";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "../../ProjectA/components/Buttone";

function CartEmpty() {
  return (
    <Box flex={1}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome
            name="opencart"
            size={64}
            color={Colors.red}
          ></FontAwesome>
        </Center>
        <Text color={Colors.black} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <Buttone bg={Colors.red} color={Colors.white}>
        SHOPPING NOW
      </Buttone>
    </Box>
  );
}

export default CartEmpty;

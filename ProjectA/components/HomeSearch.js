import React from "react";
import { HStack, Input,Box } from "native-base";
import Colors from "../src/Colors";
import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function HomeSearch() {
  const navigation = useNavigation()
  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg="rose.300"
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Food, Drink, ..."
        w="85%"
        bg={Colors.while}
        type="search"
        variant="filled"
        h={12}
        borderWith={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3} onPress={()=>navigation.navigate("Cart")}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;

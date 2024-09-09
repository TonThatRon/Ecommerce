import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Pressable,
  VStack,
  Button,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../src/Colors";
import { FontAwesome } from "@expo/vector-icons";
import{db} from "../config/firebase";
import{ref, onValue} from "firebase/database";
const Swiper = ({ cartItems }) => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={cartItems}
    renderItem={renderIterms}
    renderHiddenItem={renderHiddenIterms}
    showsVerticalScrollIndicator={false}
  />
);

const renderIterms = (data) => {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: data.item.image }}
              alt={data.item.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={3}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
              {data.item.name}
            </Text>
            <Text
              color={Colors.lightBlack}
              _text={{
                fontWeight: "bold",
              }}
            >
              ${data.item.price}
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.red}
              _pressed={{ bg: Colors.red }}
              _text={{ color: Colors.white }}
            >
              {data.item.quantity}
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
};

const renderHiddenIterms = () => {
  return (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center" space={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
};

const CartIterm = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const dbRef = ref(db,"Cart");
    onValue(dbRef, (snapshot)=> {
      const items = snapshot.val();
      if (items) {
        const itemsList = Object.keys(items).map((key) => ({
          ...items[key],
          id: key,
        }));
        setCartItems(itemsList);
      }
    });
    return () => dbRef.off("value");
  }, []);

  return (
    <Box mr={6}>
      <Swiper cartItems={cartItems} />
    </Box>
  );
};

export default CartIterm;

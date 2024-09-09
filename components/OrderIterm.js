import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Pressable,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";

import Products from "../src/data/Products";
import Colors from "../src/Colors";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";

const OrderIterm = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const dbRef = ref(db, "Cart");
    onValue(dbRef, (snapshot) => {
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
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cartItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMod="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                  {item.name}
                </Text>
                <Text color={Colors.lightBlack} mt={2} bold>
                  ${item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={Colors.red}
                  _pressed={{
                    bg: Colors.red,
                  }}
                  _text={{
                    color: Colors.white,
                  }}
                >
                  {item.quantity}
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderIterm;

import {
  Box,
  Center,
  FlatList,
  HStack,
  Pressable,
  Image,
  Text,
  Modal,
  VStack,
  Button,
} from "native-base";
import React from "react";
import Products from "../src/data/Products";
import Colors from "../src/Colors";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { ref, onValue } from "firebase/database";

import Buttone from "./Buttone";
import { useNavigation } from "@react-navigation/native";

const PlaceOrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);

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
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.red}
        color={Colors.white}
        mt={5}
      >
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header> Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Total price</Text>
                <Text color="black" bold fontSize={20}>
                  ${totalPrice}
                </Text>
              </HStack>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.red}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate("order");
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              PlACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;

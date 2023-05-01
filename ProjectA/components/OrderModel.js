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
import Buttone from "./Buttone";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";

const OrderModel = () => {
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
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header> Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {cartItems.map((item) => (
                <HStack
                  key={item.id}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">
                    {item.name} :{item.price}
                  </Text>
                  <Text color="black" bold fontSize={20}>
                    ${item.price * item.quantity}
                  </Text>
                </HStack>
              ))}
              <Text
                alignItems="center"
                bold
                alignContent="center"
                fontSize={20}
              >
                Total Price ${totalPrice}
              </Text>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={5}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../ProjectA/assets/MBbanklogo.png")}
                alt="MBbanklogo"
                resizeMode="contain"
                w="full"
                h={70}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              flex={1}
              bg={Colors.red}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
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

export default OrderModel;

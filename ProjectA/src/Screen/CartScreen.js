import React, { useEffect, useState } from "react";
import {
  View,
  Box,
  Center,
  Text,
  ScrollView,
  HStack,
  Button,
} from "native-base";
import Colors from "../Colors";
import CartEmpty from "../../components/CartEmpty";
import CartIterm from "../../components/CartIterm";
import Buttone from "../../components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue } from "firebase/database";
import { db } from "../../config/firebase";

function CartScreen() {
  const navigation = useNavigation();
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
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/*header*/}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          CART
        </Text>
      </Center>
      {/*If cart is empty*/}
      {/*<CartEmpty/>*/}

      {/*cart items*/}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterm />

        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text bold>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.black,
                fontWeight: "bold",
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              ${totalPrice}
            </Button>
          </HStack>
        </Center>
        {/*checkout */}
        <Center px={5}>
          <Buttone
            onPress={() => navigation.navigate("Shipping")}
            bg={Colors.red}
            color={Colors.white}
            mt={10}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;

import React, { useState } from "react";
import {
  Box,
  ScrollView,
  Image,
  HStack,
  Heading,
  Spacer,
  Text,
  Button,
} from "native-base";
import Colors from "../Colors";
import Rating from "../../components/Rating";
import { View, TextInput, TouchableOpacity } from "react-native";
import Review from "../../components/Review";
import { useNavigation } from "@react-navigation/native";
import {
  ref,
  set,
  get,
  onValue,
  update,
  child,
  onlyOnce,
  push
} from "firebase/database";
import { db } from "../../config/firebase";

function SingleProductScreen({ route }) {
  const navigation = useNavigation();
  const Products = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (Products.countInStock && quantity < Products.countInStock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    const cartRef = ref(db, "Cart/");
    let productInCart = false;

    // Check if product already exists in cart
    onValue(
      cartRef,
      (snapshot) => {
        const cartItems = snapshot.val();
        if (cartItems) {
          Object.keys(cartItems).forEach((key) => {
            const cartItem = cartItems[key];
            if (cartItem.id === Products.id) {
              productInCart = true;
              const updatedQuantity = cartItem.quantity + quantity;
              update(child(cartRef, key), { quantity: updatedQuantity })
                .then(() => {
                  console.log("Item quantity updated successfully!");
                  alert("Item quantity updated successfully!");
                  navigation.navigate("Cart");
                })
                .catch((error) => {
                  console.error("Error updating item quantity: ", error);
                });
            }
          });
        }
        // If product doesn't exist in cart, add it
        if (!productInCart) {
          const newCartItemRef = push(cartRef);
          set(newCartItemRef, {
            id: Products.id,
            image: Products.image,
            name: Products.name,
            price: Products.price,
            quantity: quantity,
          })
            .then(() => {
              console.log("Item added to cart successfully!");
              alert("Added to cart successfully!");
              navigation.navigate("Cart");
            })
            .catch((error) => {
              console.error("Error adding item to cart: ", error);
            });
        }
      },
      {
        onlyOnce: true, // This ensures that the callback function runs only once.
      }
    );
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: Products.image }}
          alt="Product Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {Products.name}
        </Heading>
        <Rating
          value={Products.rating}
          text={`${Products.numReviewers} reviews`}
        />
        <HStack space={2} alignItems="center" my={5}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={{ fontSize: 24, fontWeight: "bold", padding: 5 }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginHorizontal: 10 }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={{ fontSize: 24, fontWeight: "bold", padding: 5 }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer />
          <Heading bold color={Colors.black}>
            ${Products.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {Products.desciption}
        </Text>
        <Button
          w="full"
          h={55}
          rounded="full"
          _text={{ color: "black", fontWeight: "bold" }}
          onPress={handleAddToCart}
        >
          ADD TO CART
        </Button>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;

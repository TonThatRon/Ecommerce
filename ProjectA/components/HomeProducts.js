// HomeProducts.js

import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Heading,
  Image,
  Box,
  Pressable,
} from "native-base";
import Colors from "../src/Colors";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/firebase";
import { ref, onValue } from "firebase/database";

function HomeProducts() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(db, "Products");
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const products = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setProducts(products);
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      > */}
      {products.map((product) => (
        <Pressable
          onPress={() => navigation.navigate("Single", product)}
          key={product.id}
          w="47%"
          bg={Colors.white}
          rounded="md"
          shadow={2}
          pt={0.3}
          my={3}
          pb={2}
          overflow="hidden"
        >
          <Image
            source={{ uri: product.image }}
            alt={product.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
          <Box px={4} pt={1}>
            <Heading size="sm" bold>
              ${product.price}
            </Heading>
            <Text fontSize={15} mt={1} isTruncated w="full">
              {product.name}
            </Text>
            <Rating value={product.rating} />
          </Box>
        </Pressable>
      ))}
      {/* </Flex> */}
    </ScrollView>
  );
}

export default HomeProducts;

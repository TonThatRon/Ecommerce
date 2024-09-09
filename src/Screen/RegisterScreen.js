import React from "react";
import { auth } from "../../config/firebase";
import {
  View,
  Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
} from "native-base";

import Colors from "../Colors";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegisterScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Register successfully");
        navigation.navigate("Login");
      } catch (error) {
        console.log("got error:", error.message);
      }
    }
  };
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.jpg")}
      ></Image>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading color={Colors.red}>SIGN UP</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={30} color={Colors.subGreen} />
            }
            variant="underlined"
            placeholder="username"
            placeholderTextColor={Colors.subGreen}
            w="70%"
            pl={2}
            type="text"
            color={Colors.subGreen}
            borderBottomColor={Colors.underline}
          />

          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={30} color={Colors.subGreen} />
            }
            variant="underlined"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="user@gmail.com"
            placeholderTextColor={Colors.subGreen}
            w="70%"
            pl={2}
            type="text"
            color={Colors.subGreen}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={30} color={Colors.subGreen} />
            }
            variant="underlined"
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="password"
            placeholderTextColor={Colors.subGreen}
            w="70%"
            type="password"
            pl={2}
            color={Colors.subGreen}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.blue}
          onPress={handleSubmit}
        >
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.red}> LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;

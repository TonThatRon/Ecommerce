import React, { useState } from "react";
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
import { MaterialIcons , FontAwesome, Ionicons} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("Bottom");
      } catch (error) {
        console.log("got error: ", error.message);
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
        <Heading color={Colors.red}>LOGIN</Heading>
        <VStack space={5} pt="6">
          

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
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.red}> SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;

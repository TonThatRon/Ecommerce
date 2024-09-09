import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  FormControl,
  Input,
  ScrollView,
  VStack,
  Button,
} from "native-base";
import Colors from "../../src/Colors";
import Buttone from "../../components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Inputs = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "text",
  },
  {
    label: "PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];
const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.log("error", error.message);
      
    }
  };

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderColor={Colors.main}
                borderWidth={2}
                bg={Colors.subGreen}
                py={4}
                type={i.type}
                color="black"
                fontSize={20}
                _focus={{
                  bg: Colors.white,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.red} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
          <Button
            w="full"
            h={55}
            rounded="full"
            _text={{ color: "black", fontWeight: "bold" }}
            onPress={handleLogout}
          >
            LOG OUT
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;

import React from "react";
import { Image, Box, Center, VStack, Button } from "native-base";
import Colors from "../Colors";
import Buttone from "../../components/Buttone";
import { useNavigation } from "@react-navigation/native";

function NotVerifyScreen({ navigation }) {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/background.jpg")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone
          onPress={() => {
            navigation.navigate("Register");
          }}
          bg={Colors.deepGray}
          color={Colors.red}
        >
          REGISTER
        </Buttone>
        <Buttone
          onPress={() => {
            navigation.navigate("Login");
          }}
          bg={Colors.blue}
          color={Colors.red}
        >
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;

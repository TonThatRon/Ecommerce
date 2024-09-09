import React from "react";
import { Center, Heading, Text } from "native-base";
import Colors from "../src/Colors";

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} mb={2} color="black">
        {title}
      </Heading>
      <Text fontSize={13} color="black">
        {subTitle}
      </Text>
      <Text fontSize={13} textAlign="center" italic color="black">
        {text}
      </Text>
      {/*status*/}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.blue}>
          <Text fontSize={13} color="white">
            Paid on April 26 2023
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={Colors.red}>
          <Text fontSize={13} color="white">
            Not deliver
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;

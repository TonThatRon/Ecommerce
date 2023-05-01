import { View } from "react-native";
import React from "react";
import { HStack, Pressable, ScrollView, Box, Text, Button } from "native-base";
import Colors from "../../src/Colors";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*PAID*/}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.subGreen}
            py={5}
            px={2}
          >
            <Text fontSize={10} color={Colors.blue} isTruncated>
              404426076360630
            </Text>
            <Text fontSize={12} bold color="black" isTruncated>
              PAID
            </Text>
            <Text fontSize={12} italic color="black" isTruncated>
              April 4 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $1710
            </Button>
          </HStack>
        </Pressable>
        {/*NOTPAID*/}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={10} color={Colors.blue} isTruncated>
              404426076360634
            </Text>
            <Text fontSize={12} bold color="black" isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={12} italic color="black" isTruncated>
              Oct 17 2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              $105
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;

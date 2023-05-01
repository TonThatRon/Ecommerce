import React from "react";

function IntroScreen() {
  return (
    <Pressable
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
        source={{ uri: Products.image }}
        alt={Products.name}
        w="full"
        h="80%"
        resizeMode="contain"
      />
      <Box px={4} pt={1}>
        <Heading size="sm" bold>
         SHOPPING NOW
        </Heading>
      </Box>
    </Pressable>
  );
}

export default IntroScreen;

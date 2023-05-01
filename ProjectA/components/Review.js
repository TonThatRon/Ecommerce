import React, { useState } from "react";
import {
  Heading,
  Text,
  Box,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import Colors from "../src/Colors";
import Rating from "./Rating";
import Message from "./Notfications/Message";
import Buttone from "../../ProjectA/components/Buttone"

function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Client review
      </Heading>
      {/* if there is not review*/}
      <Message
        color={Colors.black}
        bg={Colors.deepGray}
        bold
        children="NO REVIEW"
      />

      {/* review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Rondeptrai
        </Heading>
        <Rating value={4.5} />
        <Text my={2}>March 30 2023</Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={13}
          children={
            "Now I'm on a mission to recover my memories and discover all of my awesome powers."
          }
        />
      </Box>
      {/*write review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1-Poor" value="1" />
              <Select.Item label="2-Fair" value="2" />
              <Select.Item label="3-Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="Enter you comments"
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <Buttone bg={Colors.red} color={Colors.white}>
            SUBMIT
          </Buttone>
          <Message
            color={Colors.white}
            bg={Colors.black}
            children={"Please 'Login' to write review"}
          ></Message>
        </VStack>
      </Box>
    </Box>
  );
}

export default Review;

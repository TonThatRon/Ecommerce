import React from "react";
import { Center, View, Image ,Heading,Text} from "native-base";
import Colors from "../Colors";
import Tabs from "../../components/Profile/Tabs";

function ProfileScreen() {
  return (
    <>
    <Center bg="red.500" pt={10} pb={6}>
      <Image
        source={{
          uri: "https://www.citypng.com/public/uploads/small/11639786938ezifytzfr8tbs8nzjsjdc1z0aqtrhyhq1zkujoyerqksff9tsl1f7vg9k1ujbojemibzdoayolcjrzbhp4euwhqjtyfa00tk9okr.png",
        }}
        alt="profile"
        w={24}
        h={24}
        resizeMode="cover"
      />
      <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
        Ron deptrai sieu cap vip pro
      </Heading>
      <Text italic fontSize={10} color={Colors.white}>
        Joined April 4 2023
      </Text>
    </Center>
    <Tabs/>
    </>
  );
}

export default ProfileScreen;

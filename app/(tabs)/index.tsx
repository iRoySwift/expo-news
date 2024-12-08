import { Link } from "expo-router";
import React from "react";
import { View, ScrollView } from "react-native";

interface Props {}
const HomeScreen: React.FC<Props> = () => {
  return (
    <View className="h-full w-full justify-center bg-white p-2">
      <ScrollView>
        <Link className="w-100 p-2" href="/learn/02-flexbox/flexDirection">
          FlexDirection
        </Link>
        <Link className="w-100 p-2" href="/learn/02-flexbox/justifyContent">
          JustifyContent
        </Link>
        <Link className="w-100 p-2" href="/learn/02-flexbox/alignItems">
          AlignItem
        </Link>
        <Link className="w-100 p-2" href="/learn/02-flexbox/flex">
          Flex
        </Link>
        <Link className="w-100 p-2" href="/learn/03-dimensions">
          Demensions
        </Link>
        <Link className="w-100 p-2" href="/learn/04-alertbutton">
          AlertButton
        </Link>
        <Link className="w-100 p-2" href="/learn/05-switch_statusbar">
          Switch Status
        </Link>
        <Link className="w-100 p-2" href="/learn/06-activity_indicator">
          ActivityIndicator
        </Link>
        <Link className="w-100 p-2" href="/learn/07-image">
          Image
        </Link>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

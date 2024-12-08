import FlexContainer from "@/components/Learn/FlexContainer";
import { FlexItemBase } from "@/components/Learn/FlexItemBase";
import React from "react";
import { View, Text, ScrollView } from "react-native";

interface Props {}
const Flex: React.FC<Props> = () => {
  return (
    <View className="h-full w-full justify-center bg-white p-2">
      <Text className="text-3xl">主轴方向</Text>
      <ScrollView>
        <Text className="text-2xl">flexDirection:'column'(默认)</Text>
        <FlexContainer>
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexDirection:'column-reverse'</Text>
        <FlexContainer className="flex-col-reverse">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexDirection:'row'</Text>
        <FlexContainer className="flex-row">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexDirection:'row-reverse'</Text>
        <FlexContainer className="flex-row-reverse">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
      </ScrollView>
    </View>
  );
};
export default Flex;

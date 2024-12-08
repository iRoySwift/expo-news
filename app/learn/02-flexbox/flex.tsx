import FlexContainer from "@/components/Learn/FlexContainer";
import { FlexItemBase } from "@/components/Learn/FlexItemBase";
import React from "react";
import { View, Text, ScrollView } from "react-native";

interface Props {}
const Flex: React.FC<Props> = () => {
  return (
    <View className="h-full w-full justify-center bg-white p-2">
      <Text className="text-3xl">项目在主轴的尺寸占比</Text>
      <ScrollView>
        <Text className="text-2xl">flexRow:1:1:1</Text>
        <FlexContainer className="flex-row">
          <FlexItemBase className="flex-1">刘备</FlexItemBase>
          <FlexItemBase className="flex-1">关羽</FlexItemBase>
          <FlexItemBase className="flex-1">张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexRow:1:2:3</Text>
        <FlexContainer className="flex-row">
          <FlexItemBase className="flex-1">刘备(1)</FlexItemBase>
          <FlexItemBase className="flex-2">关羽(2)</FlexItemBase>
          <FlexItemBase className="flex-3">张飞(3)</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexColumn:1:1:1</Text>
        <FlexContainer className="flex-col">
          <FlexItemBase className="flex-1">刘备</FlexItemBase>
          <FlexItemBase className="flex-1">关羽</FlexItemBase>
          <FlexItemBase className="flex-1">张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">flexColumn:1:1:1</Text>
        <FlexContainer className="flex-col">
          <FlexItemBase className="flex-1">刘备(1)</FlexItemBase>
          <FlexItemBase className="flex-2">关羽(2)</FlexItemBase>
          <FlexItemBase className="flex-3">张飞(3)</FlexItemBase>
        </FlexContainer>
      </ScrollView>
    </View>
  );
};
export default Flex;

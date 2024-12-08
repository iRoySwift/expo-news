import FlexContainer from "@/components/Learn/FlexContainer";
import { FlexItemBase } from "@/components/Learn/FlexItemBase";
import React from "react";
import { View, Text, ScrollView } from "react-native";

interface Props {}
const AlignItem: React.FC<Props> = () => {
  return (
    <View className="h-full w-full justify-center bg-white p-2">
      <Text className="text-3xl">项目在交叉轴上的对齐方式</Text>
      <ScrollView>
        <Text className="text-2xl">alignItems:'flex-start'(默认)</Text>
        <FlexContainer className="flex-row items-start">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">alignItems:'center'</Text>
        <FlexContainer className="flex-row items-center">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">alignItems:'flex-end'</Text>
        <FlexContainer className="flex-row items-end">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">alignItems:'stretch'</Text>
        <FlexContainer className="flex-row items-stretch">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">alignItems:'baseline'</Text>
        <FlexContainer className="flex-row items-baseline">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase className="text-6xl">关羽</FlexItemBase>
          <FlexItemBase className="text-4xl">张飞</FlexItemBase>
        </FlexContainer>
      </ScrollView>
    </View>
  );
};
export default AlignItem;

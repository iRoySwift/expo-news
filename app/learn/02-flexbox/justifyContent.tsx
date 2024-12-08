import FlexContainer from "@/components/Learn/FlexContainer";
import { FlexItemBase } from "@/components/Learn/FlexItemBase";
import React from "react";
import { View, Text, ScrollView } from "react-native";

interface Props {}
const JustifyContent: React.FC<Props> = () => {
  return (
    <View className="h-full w-full justify-center bg-white p-2">
      <Text className="text-3xl">FlexRow项目在主轴上的对齐方式</Text>
      <ScrollView>
        <Text className="text-2xl">justifyContent:'flex-start'(默认)</Text>
        <FlexContainer className="flex-row justify-start">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">justifyContent:'center'</Text>
        <FlexContainer className="flex-row justify-center">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">justifyContent:'flex-end'</Text>
        <FlexContainer className="flex-row justify-end">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">justifyContent:'space-around'</Text>
        <FlexContainer className="flex-row justify-around">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
        <Text className="text-2xl">justifyContent:'space-evenly'</Text>
        <FlexContainer className="flex-row justify-evenly">
          <FlexItemBase>刘备</FlexItemBase>
          <FlexItemBase>关羽</FlexItemBase>
          <FlexItemBase>张飞</FlexItemBase>
        </FlexContainer>
      </ScrollView>
    </View>
  );
};
export default JustifyContent;

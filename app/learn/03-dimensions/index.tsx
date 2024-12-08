import React from "react";
import { Text, View, Dimensions } from "react-native";

interface Props {}
const DimensionsPage: React.FC<Props> = () => {
  let width = Dimensions.get("window").width / 2;
  const ItemView = (props: any) => {
    return (
      <View
        className="justify-center border bg-blue-300"
        style={{ width: props.width }}>
        <Text className="text-center text-xl">{props.children}</Text>
      </View>
    );
  };
  return (
    <View className="flex-row flex-wrap">
      <ItemView width={width}>
        <Text className="text-xl">扫一扫</Text>
      </ItemView>
      <ItemView width={width}>
        <Text className="text-xl">付款码</Text>
      </ItemView>
      <ItemView width={width}>
        <Text className="text-xl">卡包</Text>
      </ItemView>
      <ItemView width={width}>
        <Text className="text-xl">出行</Text>
      </ItemView>
    </View>
  );
};
export default DimensionsPage;

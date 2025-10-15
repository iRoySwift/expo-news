import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

interface Props {}
const TouchablePage: React.FC<Props> = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>TouchablePage</Text>
      <TouchableHighlight
        onPress={() => {
          alert("触碰高亮");
        }}>
        <View className="m-3 mb-3 border border-red-300">
          <Text>触碰高亮</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
        onPress={() => {
          alert("触碰透明度");
        }}>
        <View className="m-3 mb-3 border border-red-300">
          <Text>触碰透明度</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => {
          alert("触碰无响应");
        }}>
        <View className="m-3 mb-3 border border-red-300">
          <Text>触碰无响应</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default TouchablePage;

import React from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";

interface Props {}
const Indicator: React.FC<Props> = () => {
  if (Platform.OS == "ios") {
    alert("当前应用是iOS");
  } else {
    alert("当前应用是andrion");
  }
  return (
    <View className="flex gap-y-10">
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      {/* 数字只在安卓有效 */}
      <ActivityIndicator size={70} />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};
export default Indicator;

import UIButton from "@/components/Learn/UIButton";
import React from "react";
import { Alert, Button, View, Text } from "react-native";

interface Props {}
const AlertButton: React.FC<Props> = () => {
  const createTwoButtonAlert = () => {
    Alert.alert("警告标题", "警告内容", [
      { text: "取消", onPress: () => console.log("Cancel"), style: "cancel" },
      { text: "确定", onPress: () => console.log("Ok"), style: "default" },
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert("更新提示", "发现新版本是否现在更新？", [
      {
        text: "稍后再试",
        onPress: () => console.log("稍后再试"),
        style: "default",
      },
      { text: "取消", onPress: () => console.log("Cancel"), style: "cancel" },
      { text: "确定", onPress: () => console.log("Ok"), style: "default" },
    ]);
  };

  return (
    <View className="flex items-center gap-2">
      <Button
        title="Alert"
        color={"red"}
        onPress={() => {
          alert("Simple Button pressed");
        }}
      />
      <UIButton
        title="Alert"
        className="bg-red-400 text-white"
        onPress={() => {
          Alert.alert("Simple Button pressed");
        }}
      />

      <UIButton
        title="两个按钮"
        className="bg-red-400 text-white"
        onPress={() => {
          createTwoButtonAlert();
        }}
      />
      <UIButton
        title="三个按钮"
        className="bg-purple-400 text-white"
        onPress={() => {
          createThreeButtonAlert();
        }}
      />
    </View>
  );
};
export default AlertButton;

import UIButton from "@/components/Learn/UIButton";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {}
const index: React.FC<Props> = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View className="flex-1 items-center justify-center gap-4">
      <TextInput
        className="h-10 w-2/3 rounded border border-cyan-500 px-4"
        placeholder="请输入用户名"
        value={text}
        onChangeText={onChangeText}
      />
      <TextInput
        className="h-10 w-2/3 rounded border border-cyan-500 px-4"
        placeholder="请输入密码"
        secureTextEntry={true}
        value={number}
        onChangeText={onChangeNumber}
      />
      <TextInput
        className="h-10 w-2/3 rounded border border-cyan-500 px-4"
        placeholder="请输入手机号"
        keyboardType="number-pad"
        secureTextEntry={true}
        value={number}
        onChangeText={onChangeNumber}
      />
      <TextInput
        className="h-20 w-2/3 rounded border border-cyan-500 px-4"
        placeholder="请输入说明"
        keyboardType="number-pad"
        multiline={true}
        numberOfLines={5}
        textAlignVertical="top"
      />
      <View className="w-2/3">
        <UIButton title="登录" className="bg-red-400 text-white" />
      </View>
    </View>
  );
};
export default index;

import { Stack, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";

interface Props {}
const LeranLayout: React.FC<Props> = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "返回",
      headerBackTitleVisible: false,
      headerTitle: "Learn",
    });
  }, [navigation]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#f8f9fa" }, // 设置头部样式
        headerTintColor: "#333", // 设置返回按钮颜色
        headerTitleAlign: "center", // 设置标题居中
      }}
    />
  );
};
export default LeranLayout;

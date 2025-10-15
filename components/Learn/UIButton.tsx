import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  className?: string;
  onPress?: () => void;
}
const UIButton: React.FC<Props> = ({
  title,
  className = "bg-blue-400 text-white",
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`w-full rounded-lg px-5 py-3 ${className}`}
      onPress={onPress}>
      <Text className={`text-center align-middle text-base ${className}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default UIButton;

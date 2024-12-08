import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  title: string;
  className?: string;
  onPress?: () => void;
}
const UIButton: React.FC<Props> = ({ title, className, onPress }) => {
  return (
    <TouchableOpacity
      className={`rounded-lg px-5 py-3 ${className}`}
      onPress={onPress}>
      <Text className={`text-base ${className}`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default UIButton;

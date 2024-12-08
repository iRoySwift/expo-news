import React from "react";
import { View } from "react-native";

interface Props {
  className?: String;
  children: React.ReactNode;
}
const FlexContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <View className={`mt-4 h-40 border border-[#ddd] ${className}`}>
      {children}
    </View>
  );
};

export default FlexContainer;

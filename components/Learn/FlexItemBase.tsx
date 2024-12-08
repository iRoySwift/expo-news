import { ReactNode } from "react";
import { Text } from "react-native";

interface iItemBase {
  className?: String;
  children: ReactNode;
}
export const FlexItemBase: React.FC<iItemBase> = ({ className, children }) => {
  return (
    <Text
      className={`border border-red-300 bg-[#dfb] p-1 text-center ${className}`}>
      {children}
    </Text>
  );
};

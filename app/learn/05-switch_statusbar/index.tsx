import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { StatusBar } from "expo-status-bar";

interface Props {}
const SwtichStatus: React.FC<Props> = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar hidden={isEnabled} backgroundColor="red" style="dark" />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
export default SwtichStatus;

import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
// import { Image } from "expo-image";
const icon = require("@/assets/images/react-logo.png");

interface Props {}
const ImagePage: React.FC<Props> = () => {
  let width = Dimensions.get("window").width / 2;
  return (
    <View className="flex items-center justify-center gap-y-4">
      <Image
        className="h-20 w-20"
        source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
        // source={icon}
        // contentFit="cover"
        // transition={1000}
      />
      <Image style={styles.image} source={icon} />
      <Image
        className="h-20 w-20"
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2,
  },
});
export default ImagePage;

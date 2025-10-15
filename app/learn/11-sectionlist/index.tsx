import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";

interface Item {
  title: string;
  data: string[];
}

const DATA: Item[] = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

interface Props {}
const index: React.FC<Props> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [sections, setSections] = useState<Item[]>([]);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setSections(DATA);
      setRefreshing(false);
    }, 1000);
  };
  const handleReached = () => {
    setSections((pre: Item[]) => {
      return [
        ...pre,
        {
          title: "三国",
          data: ["诸葛亮", "周瑜"],
        },
      ];
    });
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="my-4 flex-1" style={styles.container}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View className="my-2 bg-[#f9c2ff] p-5">
              <Text className="text-2xl">{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text className="bg-white text-3xl">{title}</Text>
          )}
          ItemSeparatorComponent={() => {
            return <View className="border-b border-red-300"></View>;
          }}
          ListEmptyComponent={() => {
            return <Text>空空如也！</Text>;
          }}
          ListHeaderComponent={() => {
            return <Text className="text-3xl">三国英雄榜</Text>;
          }}
          ListFooterComponent={() => {
            return <Text>没有更多了</Text>;
          }}
          refreshing={refreshing}
          onRefresh={() => {
            handleRefresh();
          }}
          onEndReachedThreshold={0.1}
          onEndReached={() => {
            handleReached();
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
export default index;

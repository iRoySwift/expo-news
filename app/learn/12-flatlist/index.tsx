import Constants from "expo-constants";
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

interface Item {
  title: string;
  id: string;
}

const data = [
  {
    id: "1",
    title: "头条",
  },
  {
    id: "2",
    title: "娱乐",
  },
  {
    id: "3",
    title: "体育",
  },
  {
    id: "4",
    title: "军事",
  },
  {
    id: "5",
    title: "科技",
  },
  {
    id: "6",
    title: "财经",
  },
  {
    id: "7",
    title: "时尚",
  },
  {
    id: "8",
    title: "社会",
  },
  {
    id: "9",
    title: "北京",
  },
  {
    id: "10",
    title: "动漫",
  },
  {
    id: "11",
    title: "国际",
  },
];

type ItemProps = {
  title: string;
  selectedId: string;
  setSelectedId: (id: string) => void;
  id: string;
  numColumns: number;
};

const Item = ({
  title,
  id,
  selectedId,
  setSelectedId,
  numColumns,
}: ItemProps) => {
  const backgroundColor = id === selectedId ? "#dfb" : "#f9c2ff";
  const width = Dimensions.get("window").width / numColumns;
  console.log(width);
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedId(id);
      }}>
      <View
        className="m-3 flex h-20 items-center justify-center bg-[#f9c2ff]"
        style={[{ backgroundColor, width }]}>
        <Text className="text-2xl">
          {title}
          {width}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

interface Props {}
const index: React.FC<Props> = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [numColumns, setNumColumns] = useState(2);
  const [sections, setSections] = useState<Item[]>(data);
  const [selectedId, setSelectedId] = useState("0");

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setSections(data);
      setRefreshing(false);
    }, 1000);
  };
  const handleReached = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sections}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            id={item.id}
            numColumns={numColumns}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
        keyExtractor={item => item.id}
        horizontal={false}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: 80,
          offset: 80 * index,
          index,
        })}
        initialNumToRender={10}
        numColumns={numColumns}
        inverted={false}
        extraData={selectedId}
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
  );
};
const styles = StyleSheet.create({
  container: {
    // marginBottom: Constants.statusBarHeight,
  },
});
export default index;

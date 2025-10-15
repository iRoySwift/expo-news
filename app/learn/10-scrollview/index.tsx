import React from "react";
import { View, Text, ScrollView, SafeAreaView, Platform } from "react-native";

interface Props {}
const index: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        <Text className="mr-2 text-3xl text-red-300">新闻</Text>
        <Text className="mr-2 text-3xl text-red-300">财经</Text>
        <Text className="mr-2 text-3xl text-red-300">娱乐</Text>
        <Text className="mr-2 text-3xl text-red-300">体育</Text>
        <Text className="mr-2 text-3xl text-red-300">军事</Text>
        <Text className="mr-2 text-3xl text-red-300">时尚</Text>
        <Text className="mr-2 text-3xl text-red-300">科技</Text>
      </ScrollView>
      <ScrollView
        // contentContainerStyle={{ margin: 30 }}
        showsVerticalScrollIndicator={false}>
        <Text className="text-3xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          vel dolores veritatis ad eligendi ipsum consectetur, qui ratione
          tempore ab explicabo fugiat temporibus laborum reiciendis eveniet
          dolor aliquid cum modi, cupiditate libero. Rem inventore, ullam nisi
          nulla commodi unde? Veritatis aspernatur, nostrum ullam quos harum
          quod itaque quaerat veniam quasi dolor provident dicta assumenda
          voluptatum asperiores adipisci quo vel sunt saepe, velit illo eos
          nihil porro obcaecati. Repudiandae aspernatur asperiores tempora
          nesciunt vitae odio commodi dolor ullam. Ducimus repellendus voluptate
          vel, necessitatibus ab recusandae praesentium dicta expedita eos,
          quae, nisi voluptates dolor aperiam consequuntur facilis et ullam
          ipsum? Illum, voluptatum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Modi sint quidem facilis sed quas distinctio illo
          porro doloremque quod repellendus vitae, quis id nobis esse, nulla
          exercitationem officiis similique! Possimus necessitatibus nemo
          commodi vitae quasi magnam impedit, praesentium, et, exercitationem
          accusantium atque? Repellendus dolore totam quisquam architecto
          dolorem consequatur quasi aut esse, incidunt, ipsam, sit molestias
          culpa consectetur officia quos ullam odio quibusdam fugiat quam
          eveniet modi facere! Eligendi dolorem animi vitae voluptatibus rem. Ut
          et debitis natus. Ipsa voluptatibus, officia modi quos natus
          laudantium iure, saepe ad odit, voluptatem nesciunt. Sit doloribus
          perferendis, eaque ullam dolor quam harum. Veritatis!
        </Text>
        {/*解决ScrollView在安卓下滚动不到底的问题*/}
        {/*// eslint-disable-next-line react-native/no-inline-styles*/}
        <View style={{ height: Platform.OS === "ios" ? 0 : 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default index;

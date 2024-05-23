import { View, FlatList } from "react-native";
import React from "react";
import Glass from "../ components/glass";

export default function Home() {
  const glassCountData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const __renderItem = ({ item }) => <Glass />;

  return (
    <View>
      <FlatList
        numColumns={3}
        data={glassCountData}
        renderItem={__renderItem}
      />
    </View>
  );
}

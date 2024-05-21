import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ShoppingList({ navigation }) {
  const nameCollection = [
    "aslam",
    "akram",
    "ajmal",
    "kashmala",
    "saleem",
    "kathrine",
    "chips",
    "gary",
    "Mona",
    "raza",
    "sania",
    "Ahtisham",
  ];

  function onItemPressed() {
    navigation.navigate("CameraPractice");
  }

  const __renderItem = ({ item, index }) => (
    <Pressable onPress={onItemPressed}>
      <View style={styles.itemCon}>
        <Ionicons name="person" size={33} />
        <Text>
          {index + 1}: {item}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={nameCollection}
        renderItem={__renderItem}
        numColumns={3} // helps to make a grid
        // horizontal={true} // helps to scroll horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemCon: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

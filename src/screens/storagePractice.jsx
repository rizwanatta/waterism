import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StoragePractice() {
  const [name, setName] = useState("");

  useEffect(() => {
    getSavedName();
  }, []);

  function getSavedName() {
    AsyncStorage.getItem("savedName").then((response) => {
      setName(response);
    });
  }

  function handleSubmit() {
    // to save  a value you need to give it a name(key)
    AsyncStorage.setItem("savedName", name);
  }

  return (
    <View className="p-4 ">
      <TextInput
        onChangeText={setName}
        className="border-red-300 p-2 border my-2 "
        placeholder="Enter your name"
      />

      <Button title={"submit"} onPress={handleSubmit} />

      <Text>{name}</Text>
    </View>
  );
}

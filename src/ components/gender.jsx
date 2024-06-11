import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Gender({ onGenderSelected }) {
  const [gender, setGender] = useState();

  function onMalePressed() {
    setGender("male");
    onGenderSelected("male");
  }

  function onFeMalePressed() {
    setGender("female");
    onGenderSelected("female");
  }

  return (
    <View className="flex-row justify-between p-2 my-2">
      <Text>Select Gender:</Text>
      <View className="flex-row justify-evenly w-1/2">
        <TouchableOpacity onPress={onFeMalePressed}>
          <View className="flex-row items-center">
            <Ionicons
              name={
                gender === "female" ? "radio-button-on" : "radio-button-off"
              }
              size={30}
            />
            <Text>Female</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onMalePressed}>
          <View className="flex-row items-center">
            <Ionicons
              name={gender === "male" ? "radio-button-on" : "radio-button-off"}
              size={30}
            />
            <Text>Male</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { View, FlatList, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Glass from "../ components/glass";
import DatePickerModal from "../ components/DatePickerModal";

export default function Home() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState("");
  const glassCountData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const __renderItem = ({ item }) => <Glass />;

  function onModalClose(pickedDate) {
    setDate(pickedDate);
    setOpenDatePicker(false);
  }

  function onCalPressed() {
    if (openDatePicker === false) {
      setOpenDatePicker(true);
    } else {
      setOpenDatePicker(false);
    }
  }

  return (
    <View className=" flex">
      <Pressable onPress={onCalPressed}>
        <View className="flex flex-row items-center self-end p-5">
          <Ionicons name={"calendar"} size={30} color="orange" />
          <Text>Date: {date} </Text>
        </View>
      </Pressable>

      <FlatList
        numColumns={3}
        data={glassCountData}
        renderItem={__renderItem}
      />

      <DatePickerModal isOpen={openDatePicker} onClose={onModalClose} />
    </View>
  );
}

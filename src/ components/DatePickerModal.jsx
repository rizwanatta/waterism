import { View, Text } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";

export default function DatePickerModal() {
  const [date, setDate] = useState(dayjs());

  return (
    <Modal isVisible={true} className=" justify-end ">
      <View className="bg-white">
        <DateTimePicker
          mode="single"
          timePicker={true}
          date={date}
          onChange={(params) => setDate(params.date)}
        />
      </View>
    </Modal>
  );
}

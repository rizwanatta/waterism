import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View
      style={{ backgroundColor: "rgba(200,0,0,0.5)" }}
      className="w-screen h-screen justify-center items-center absolute"
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
}

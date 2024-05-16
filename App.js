import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <AntDesign color="red" size={50} name={"back"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

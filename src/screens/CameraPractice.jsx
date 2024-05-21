import { useState } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CameraPractice({ navigation }) {
  const [imagePath, setImagePath] = useState("");

  const startCamera = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync();

    if (result.canceled === false) {
      let url = result.assets[0].uri;
      setImagePath(url);
    }
  };

  function attemptToOpenWebview() {
    navigation.navigate("WebViewPractice");
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagePath }} style={styles.image} />
      <Button title="Start Camera" onPress={startCamera} />
      <Button title="open" onPress={attemptToOpenWebview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

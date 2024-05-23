import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import glassFull from "../../assets/glass_full.png";
import glassEmpty from "../../assets/glass_empty.png";

export default function Glass() {
  const [tappedGlass, setTappedGlass] = useState(glassFull);

  function onGlassPressed() {
    if (tappedGlass === glassFull) {
      setTappedGlass(glassEmpty);
    } else {
      setTappedGlass(glassFull);
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={onGlassPressed}>
        <Image source={tappedGlass} style={styles.glass} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  glass: {
    height: 80,
    width: 80,
  },
});

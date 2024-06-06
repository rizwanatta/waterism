import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import Modal from "react-native-modal";

export default function MediaPicker({ onImagePicked }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imagePath, setImagePath] = useState("");

  function handleImagePressed() {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  handleModalClose = () => {
    setIsOpen(false);
  };

  const onCameraPressed = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync();

    if (result.canceled === false) {
      let url = result.assets[0].uri;
      setImagePath(url);
      onImagePicked(url);
      handleModalClose();
    }
  };
  const onGalleryPressed = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (result.canceled === false) {
      let url = result.assets[0].uri;
      setImagePath(url);
      onImagePicked(url);
      handleModalClose();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleImagePressed}>
        {imagePath === "" ? (
          <Image
            source={require("../../assets/icon.png")}
            className="w-32 h-32 rounded-full self-center my-4"
          />
        ) : (
          <Image
            source={{ uri: imagePath }}
            className="w-32 h-32 rounded-full self-center my-4"
          />
        )}
      </TouchableOpacity>

      <Modal isVisible={isOpen} className="justify-end m-0">
        <View className="h-72 bg-white w-full items-center justify-center">
          <View className={"absolute right-0 top-0 -mt-5"}>
            <Pressable onPress={handleModalClose}>
              <Ionicons name="close-circle" size={50} color={"red"} />
            </Pressable>
          </View>
          <View className="flex flex-row justify-evenly w-full">
            <Pressable onPress={onCameraPressed}>
              <Ionicons name="camera" size={90} />
            </Pressable>
            <Pressable onPress={onGalleryPressed}>
              <Ionicons name="person" size={90} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebaseConfig";

import Loader from "../ components/loader";
import MediaPicker from "../ components/mediaPicker";
import { imgToBlob } from "../lib/blobMaker";

import { storage } from "../database/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { attemptToRegisterNewUser } from "../services/register-service";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [img, setImg] = useState("");

  const handleRegister = () => {
    if (email === "") {
      alert("Please enter email first");
      return; // do not run the code after it
    }
    if (userName === "") {
      alert("Please enter user Name first");
      return; // do not run the code after it
    }
    if (password === "") {
      alert("Please enter password first");
      return; // do not run the code after it
    }
    if (confirmPassword === "") {
      alert("Please enter confirm password first");
      return; // do not run the code after it
    }

    if (password != confirmPassword) {
      alert("Password and Confirm Password did not match");
      return; // do not run the code after it
    }

    if (img === "") {
      alert("Please upload an image");
      return; // do not run the code after it
    }

    setLoading(true);
    attemptToRegisterNewUser(email, password, img);
    setLoading(false);
  };

  function onPicTaken(imgPath) {
    setImg(imgPath);
  }

  return (
    <View className="flex-1 justify-center p-4 bg-red-200">
      <Text className="text-2xl font-bold mb-4 text-center">
        Make A New Account
      </Text>

      <MediaPicker onImagePicked={onPicTaken} />

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="User Name"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />

      {loading ? <Loader /> : <View />}
    </View>
  );
};

export default Register;

// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Pressable,
} from "react-native";

import Loader from "../ components/loader";
import MediaPicker from "../ components/mediaPicker";
import { attemptToRegisterNewUser } from "../services/register-service";
import DatePickerModal from "../ components/DatePickerModal";
import { getFormattedDate } from "../utils/dateTimeHelper";
import Gender from "../ components/gender";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [img, setImg] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dob, setDob] = useState("");

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

    if (dob === "") {
      alert("Please select birthday");
      return; // do not run the code after it
    }
    if (gender === "") {
      alert("Please select gender");
      return; // do not run the code after it
    }

    setLoading(true);
    attemptToRegisterNewUser(
      email,
      password,
      img,
      userName,
      gender,
      dob,
      navigation
    );
    setLoading(false);
  };

  function onPicTaken(imgPath) {
    setImg(imgPath);
  }

  function onDobPressed() {
    if (isCalendarOpen === false) {
      setIsCalendarOpen(true);
    }
  }

  return (
    <View className="flex-1 justify-center p-4 ">
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

      <Pressable onPress={onDobPressed}>
        <View className="p-2 border rounded mb-2  ">
          <Text>DOB: {getFormattedDate(dob)} </Text>
        </View>
      </Pressable>

      <View>
        <Gender onGenderSelected={setGender} />
      </View>

      <Button title="Register" onPress={handleRegister} />

      {loading ? <Loader /> : <View />}

      <DatePickerModal
        isOpen={isCalendarOpen}
        onClose={(date) => {
          setIsCalendarOpen(false);
          setDob(date);
        }}
      />
    </View>
  );
};

export default Register;

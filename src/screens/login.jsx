// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { auth } from "../database/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../ components/loader";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (email === "") {
      alert("Please enter email first");
      return; // do not run the code after it
    }
    if (password === "") {
      alert("Please enter password first");
      return; // do not run the code after it
    }

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        alert("loggedin");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
        setEmail("");
        setPassword("");
      });
  };

  function onGoToRegisterPress() {
    navigation.navigate("Register");
  }

  return (
    <View className="flex-1 justify-center p-4 bg-red-200">
      <Text className="text-2xl font-bold mb-4 text-center">Login</Text>

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="border p-2 mb-4 rounded"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity
        onPress={onGoToRegisterPress}
        className="flex self-end py-2"
      >
        <Text className="underline text-blue-500">
          Don't Have an account? Register!
        </Text>
      </TouchableOpacity>

      {loading ? <Loader /> : <View />}
    </View>
  );
};

export default Login;

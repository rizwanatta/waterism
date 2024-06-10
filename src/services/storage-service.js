import AsyncStorage from "@react-native-async-storage/async-storage";

function saveUserSession(uid) {
  AsyncStorage.setItem("uid", uid);
}

function removeUserSession() {
  AsyncStorage.setItem("uid", "");
}

export { saveUserSession, removeUserSession };

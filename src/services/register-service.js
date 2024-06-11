import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import Toast from "react-native-toast-message";

import { auth, db, storage } from "../database/firebaseConfig";
import { saveUserSession } from "./storage-service";
import { imgToBlob } from "../lib/blobMaker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function attemptToRegisterNewUser(
  email,
  password,
  img,
  userName,
  gender,
  dob,
  navigation
) {
  createUserWithEmailAndPassword(auth, email, password).then((response) => {
    const userUniqueID = response.user.uid;
    saveUserSession(userUniqueID);

    const userData = { userName, gender, dob };

    attemptToUploadImg(img, userUniqueID, userData, navigation);
  });
}

async function attemptToUploadImg(img, userUniqueID, userData, navigation) {
  try {
    const blobResponse = await imgToBlob(img);
    const storageRef = ref(
      storage,
      "profilePics/" + userUniqueID + "/profile_" + Math.random() + ".png"
    );
    const uploadResponse = await uploadBytes(storageRef, blobResponse);
    const url = await getDownloadURL(storageRef);

    userData.profileImg = url;

    const docRef = doc(db, "users", userUniqueID);

    await setDoc(docRef, userData);

    Toast.show({
      type: "success",
      text1: "yaayeeeeee",
      text2: "Welcome all done",
      position: "bottom",
      visibilityTime: 10000,
    });

    navigation.replace("Login");
  } catch (error) {
    alert(error.message);
  }
}

export { attemptToRegisterNewUser };

// upload using then and catch

// function attemptToUploadImg(img, userUniqueID) {
//   // img ka blob bnanan h
//   imgToBlob(img).then((blobResponse) => {
//     const storageRef = ref(
//       storage,
//       "profilePics/" + userUniqueID + "/profile_" + Math.random() + ".png"
//     );
//     uploadBytes(storageRef, blobResponse).then((response) => {
//       getDownloadURL(storageRef).then((url) => {
//         alert(url);
//         console.log(url);
//       });
//     });
//   });
// }

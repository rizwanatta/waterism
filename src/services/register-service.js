import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../database/firebaseConfig";
import { saveUserSession } from "./storage-service";
import { imgToBlob } from "../lib/blobMaker";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function attemptToRegisterNewUser(email, password, img) {
  createUserWithEmailAndPassword(auth, email, password).then((response) => {
    const userUniqueID = response.user.uid;
    saveUserSession(userUniqueID);

    attemptToUploadImg(img, userUniqueID);
  });
}

function attemptToUploadImg(img, userUniqueID) {
  // img ka blob bnanan h
  imgToBlob(img).then((blobResponse) => {
    const storageRef = ref(
      storage,
      "profilePics/" + userUniqueID + "/profile_" + Math.random() + ".png"
    );
    uploadBytes(storageRef, blobResponse).then((response) => {
      getDownloadURL(storageRef).then((url) => {
        alert(url);
        console.log(url);
      });
    });
  });
}

export { attemptToRegisterNewUser };

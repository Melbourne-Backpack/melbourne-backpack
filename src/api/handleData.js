import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

const pushData = async (
  uid,
  campus,
  subjects,
  email,
  fullName,
  dob,
  purpose,
  facebook,
  bio
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      campus: campus,
      subjects: subjects,
      email: email,
      fullName: fullName,
      dob: dob,
      purpose: purpose,
      facebook: facebook,
      bio: bio,
    });
    console.log("Document written with ID: ", auth.currentUser.uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const uploadImage = async (uri, filename) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = storage.ref(`avatar/${filename}`);
    const uploadTask = await uploadBytes(ref, blob);
    console.log("Upload image success");
    return await getDownloadURL(uploadTask.ref);
  } catch (e) {
    console.log("Error upload image", e);
  }
};

export { pushData, uploadImage };

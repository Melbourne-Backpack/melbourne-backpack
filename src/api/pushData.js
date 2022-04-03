import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const pushData = async (
  uid,
  email,
  fullName,
  avatar,
  purpose,
  facebook,
  bio
) => {
  try {
    await setDoc(doc(db, "users", uid), {
      email: email,
      fullName: fullName,
      avatar: avatar,
      purpose: purpose,
      facebook: facebook,
      bio: bio,
    });
    console.log("Document written with ID: ", auth.currentUser.uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { pushData };

import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const pushData = async (fullName, purpose, facebook, bio) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      fullName: fullName,
      purpose: purpose,
      facebook: facebook,
      bio: bio,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { pushData };

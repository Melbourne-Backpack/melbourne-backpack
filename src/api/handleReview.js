import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const postReview = async (housingId, comment, rating) => {
  try {
    await setDoc(doc(db, "reviews", auth.currentUser.uid), {
      user_id: auth.currentUser.uid,
      housing_id: housingId,
      comment: comment,
      rating: rating,
    });
    window.alert("Your review has been submitted!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { postReview };

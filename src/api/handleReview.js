import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const postReview = async (categoryId, comment, rating) => {
  try {
    await addDoc(collection(db, "reviews"), {
      user_id: auth.currentUser.uid,
      category_id: categoryId,
      comment: comment,
      rating: rating,
    });
    window.alert("Your review has been submitted!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { postReview };

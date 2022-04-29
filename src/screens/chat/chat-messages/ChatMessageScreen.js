import { useCallback, useEffect, useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../../../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const ChatMessageScreen = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const getCurrentUserData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setCurrentUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    getCurrentUserData();

    const q = query(collection(db, "chat"), orderBy("createdAt", "desc"));
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello developer",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: require("../../../../assets/images/Junho.png"),
    //     },
    //   },
    // ]);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, "chat"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      showAvatarForEveryMessage={true}
      user={{
        _id: auth?.currentUser?.uid,
      }}
    />
  );
};

export default ChatMessageScreen;

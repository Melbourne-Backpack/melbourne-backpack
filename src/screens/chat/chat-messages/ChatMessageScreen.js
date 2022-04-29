import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Bubble, GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../../../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
import { LIGHT_PURPLE } from "../../../styles/colors";

const ChatMessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [chatUsername, setChatUsername] = useState("");

  const getCurrentUserData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setCurrentUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const getChatUserName = () => {
    getDoc(doc(db, "users", "75tcRQjWS9QFxQ8mKwldvBeGCPC3")).then((docSnap) => {
      if (docSnap.exists()) {
        setChatUsername(docSnap.data().fullName);
      } else {
        console.log("No such document!");
      }
    });
  };

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: LIGHT_PURPLE,
          },
        }}
      />
    );
  }

  const chat_members_id = `75tcRQjWS9QFxQ8mKwldvBeGCPC3_MfBKhf8jULR6Ws8akG6fSVzxfLs2`;

  useEffect(() => {
    getCurrentUserData();
    getChatUserName();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({ title: chatUsername });
  }, [navigation, chatUsername]);

  useEffect(() => {
    const q = query(
      collection(db, "chat"),
      where("chat_members", "==", chat_members_id),
      orderBy("createdAt", "desc")
    );

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
      chat_members: chat_members_id,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser?.uid,
        avatar: currentUser.avatar,
      }}
      renderBubble={renderBubble}
    />
  );
};

export default ChatMessageScreen;

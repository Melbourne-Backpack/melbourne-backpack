import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Pressable,
  TextInput,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { WHITE } from "../../styles/colors";

import { auth, db } from "../../config/firebase";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useFonts } from "expo-font";
import AlertModal from "../../components/alert-modal/AlertModal";
import Modal from "react-native-modal";

// const data = require("../../../assets/mockJSON/MOCK_DATA.json");

const EditProfile = ({ navigation }) => {
  const [data, setData] = useState({});
  const [currentDocId, setCurrentDocId] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openSubDropDown, setOpenSubDropDown] = useState(false);

  const [displayNameTI, setDisplayNameTI] = useState("");
  const [dobTI, setDobTI] = useState("");
  const [campusTI, setCampusTI] = useState("");
  const [subjectsTI, setSubjectsTI] = useState("");
  const [facebookTI, setFacebookTI] = useState("");
  const [bioTI, setBioTI] = useState("");

  const [displayNameAlert, setDisplayNameAlert] = useState(false);
  const [dobAlert, setDobAlert] = useState(false);
  const [campusAlert, setCampusAlert] = useState(false);
  const [subjectsAlert, setSubjectsAlert] = useState(false);
  const [facebookAlert, setFacebookAlert] = useState(false);
  const [bioAlert, setBioAlert] = useState(false);

  const campus = ["Hanoi", "Danang", "Saigon"];
  const subjects = [
    "Economics",
    "Business",
    "Engineer",
    "Robotics",
    "Management",
    "Aviation",
    "Education",
    "Design",
    "ProfComm",
    "Information Technology",
    "Digital Marketing",
  ];

  const getCurrentUserData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setData(docSnap.data());
        setCurrentDocId(docSnap.id);
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    getCurrentUserData();
  }, []);

  useEffect(() => {
    setDisplayNameTI(data.fullName);
    setDobTI(data.dob);
    setCampusTI(data.campus);
    {
      data.subjects && setSubjectsTI(data.subjects.join(" | "));
    }
    setFacebookTI(data.facebook);
    setBioTI(data.bio);
  }, [data]);

  const [loaded, error] = useFonts({
    PoppinsRegular: require("../../../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../../../assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const setShowAlertFunction = (showAlert) => {
    setShowAlert(showAlert);
  };

  const signOut = ({ navigation }) => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignIn");
      })
      .catch((error) => window.alert(error.message));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.background}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Community");
          }}
        >
          <Text style={styles.backBtn}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Community");
          }}
        >
          <Text style={styles.doneBtn}>Done</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: data.avatar,
            }}
            style={styles.profileImage}
          />
          <TouchableOpacity>
            <Text style={styles.changeBtn}>Change profile photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userContentDisplay}>
          <AlertModal
            navigation={navigation}
            showModal={showAlert}
            setShowModalFunction={setShowAlertFunction}
            message={"Are you sure you want to log out?"}
            icon={"logout"}
            doNavigate={true}
            toPage={"SignIn"}
            signOut={signOut}
          />
          <TouchableOpacity
            style={styles.userContentRow}
            onPress={() => {
              setDisplayNameAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Display Name</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{displayNameTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Modal
            isVisible={displayNameAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setDisplayNameAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Display Name</Text>
              </View>
              <View style={styles.editInfoContain}>
                <TextInput
                  style={styles.editInfo}
                  autoFocus={true}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(text) => {
                    setDisplayNameTI(text);
                  }}
                >
                  {displayNameTI}
                </TextInput>
                <TouchableOpacity
                  onPress={() => {
                    setDisplayNameTI("");
                  }}
                  style={styles.clearBtn}
                >
                  <Image
                    source={require("../../../assets/clear-text-input.png")}
                    style={styles.clearIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setDisplayNameAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.userContentRow}
            onPress={() => {
              setDobAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Date of birth</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{dobTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Modal
            isVisible={dobAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setDobAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Date of birth</Text>
              </View>
              <View style={styles.editInfoContain}>
                <TextInput
                  style={styles.editInfo}
                  autoFocus={true}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(text) => {
                    setDobTI(text);
                  }}
                >
                  {dobTI}
                </TextInput>
                <TouchableOpacity
                  onPress={() => {
                    setDobTI("");
                  }}
                  style={styles.clearBtn}
                >
                  <Image
                    source={require("../../../assets/clear-text-input.png")}
                    style={styles.clearIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setDobAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.userContentRow}
            onPress={() => {
              setCampusAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Campus</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{campusTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Modal
            isVisible={campusAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setCampusAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Campus</Text>
              </View>
              <View style={styles.editInfoContainExtra}>
                <TouchableOpacity
                  style={styles.editInfoExtra}
                  onPress={() => {
                    setOpenDropDown(!openDropDown);
                  }}
                >
                  <Text style={styles.text}>{campusTI}</Text>
                  <Image
                    source={require("../../../assets/dropdown.png")}
                    style={styles.dropdown}
                  />
                </TouchableOpacity>
                {openDropDown && (
                  <View>
                    {campus.map((val) => {
                      return (
                        <TouchableOpacity
                          key={val}
                          style={styles.editInfoExtra}
                          onPress={() => {
                            setCampusTI(val);
                            setOpenDropDown(false);
                          }}
                        >
                          <Text style={styles.text}>{val}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
              <TouchableOpacity
                onPress={() => {
                  setCampusAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.userContentRow}
            onPress={() => {
              setSubjectsAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Interest in</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{subjectsTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Modal
            isVisible={subjectsAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setSubjectsAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Interest in</Text>
              </View>
              <View style={styles.editInfoContainExtra}>
                <TouchableOpacity
                  style={styles.editInfoExtra}
                  onPress={() => {
                    setOpenSubDropDown(!openSubDropDown);
                  }}
                >
                  <Text style={styles.text}>{subjectsTI}</Text>
                  <Image
                    source={require("../../../assets/dropdown.png")}
                    style={styles.dropdown}
                  />
                </TouchableOpacity>
                {openSubDropDown && (
                  <View>
                    {subjects.map((val) => {
                      return (
                        <TouchableOpacity
                          key={val}
                          style={styles.editInfoExtra}
                          onPress={() => {
                            setSubjectsTI(val);
                            setOpenSubDropDown(false);
                          }}
                        >
                          <Text style={styles.text}>{val}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSubjectsAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.userContentRow}
            onPress={() => {
              setFacebookAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Facebook Link</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{facebookTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Modal
            isVisible={facebookAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setFacebookAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Facebook</Text>
              </View>
              <View style={styles.editInfoContain}>
                <TextInput
                  style={styles.editInfo}
                  autoFocus={true}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(text) => {
                    setFacebookTI(text);
                  }}
                >
                  {facebookTI}
                </TextInput>
                <TouchableOpacity
                  onPress={() => {
                    setFacebookTI("");
                  }}
                  style={styles.clearBtn}
                >
                  <Image
                    source={require("../../../assets/clear-text-input.png")}
                    style={styles.clearIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setFacebookAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <TouchableOpacity
            style={[styles.userContentRow, styles.userContentLastRow]}
            onPress={() => {
              setBioAlert(true);
            }}
          >
            <View style={styles.userContentHeadingWrapper}>
              <Text style={styles.userContentHeading}>Bio</Text>
            </View>
            <View style={styles.userContentWrapper}>
              <Text style={styles.userContent}>{bioTI}</Text>
            </View>
            <Image
              source={require("../../../assets/edit-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Modal
            isVisible={bioAlert}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            onBackdropPress={() => setBioAlert(false)}
          >
            <View style={styles.alertContainer}>
              <View style={styles.alertBody}>
                <Text style={styles.alertText}>Bio</Text>
              </View>
              <View style={styles.editInfoContain}>
                <TextInput
                  style={styles.editInfo}
                  autoFocus={true}
                  onSubmitEditing={Keyboard.dismiss}
                  onChangeText={(text) => {
                    setBioTI(text);
                  }}
                >
                  {bioTI}
                </TextInput>
                <TouchableOpacity
                  onPress={() => {
                    setBioTI("");
                  }}
                  style={styles.clearBtn}
                >
                  <Image
                    source={require("../../../assets/clear-text-input.png")}
                    style={styles.clearIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setBioAlert(false);
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import SelectDropdown from "react-native-select-dropdown";
import { Avatar, Title, Caption, Text } from "react-native-paper";
import { phoneNumberValidator } from "../../helpers/phoneNumberValidator";
import { nameValidator } from "../../helpers/nameValidator";
import { userContext, UserProvider } from "../../store/GlobalContext";
import { theme } from "../../contants/theme";
import { db } from "../../../firebase_config";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import { updateDoc, doc, collection, getDoc } from "firebase/firestore";

const EditProfile = ({ navigation }) => {
  const {
    userInfo,
    product,
    setProduct,
    userProfile,
    setGender,
    genders,
    setUserProfile,
  } = useContext(userContext);
  const [name, setName] = useState({ value: userProfile.hovaten, error: "" });
  const [phone, setPhone] = useState({ value: userProfile.sdt, error: "" });
  const [email, setEmail] = useState({ value: userInfo.email, error: "" });
  const [birthday, setBirthday] = useState(userProfile.ngaysinh);
  const [gioitinh, setGioitinh] = useState(userProfile.gioitinh);
  const [show, setShow] = useState(false);
  const [errorTextPhone, setErroTextPhone] = useState();
  const phoneError = phoneNumberValidator(phone.value);
  const onChange = (e, selectedDate) => {
    setBirthday(moment(selectedDate || date).format("YYYY-MM-DD"));
    setShow(Platform.OS === "ios" ? true : false);
  };

  useEffect(() => {
    getProfile();
    return () => {};
  }, []);

  async function getProfile() {
    const docRef = doc(db, "sinhvien", userProfile.iduser);
    const docSnap = await getDoc(docRef);
    if (docSnap.data() !== undefined) {
      setUserProfile(docSnap.data());
    }
  }
  async function updateProfile() {
    if (phoneError) {
      setErroTextPhone(phoneError);
    } else {
      setErroTextPhone(null);
      // const docSnap = await getDoc(ref);
      // if (docSnap.data() !== undefined) {
      //   console.log(docSnap.data());
      // }
      updateDoc(doc(db, "sinhvien", userProfile.iduser), {
        hovaten: name.value,
        sdt: phone.value,
        email: email.value,
        gioitinh: gioitinh,
        ngaysinh: birthday,
      });
      Alert.alert("Thông báo", "Cập nhật thành công");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2F85F8" />
      <View style={styles.circleShape}></View>
      <TouchableOpacity style={{ marginTop: -50 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={{
              uri: userProfile.image,
            }}
            style={{ height: 100, width: 100 }}
            imageStyle={{ borderRadius: 100 / 2 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="camera"
                size={35}
                color="#fff"
                style={{
                  opacity: 0.7,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 10,
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.menuWapper}>
        <TouchableOpacity>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          >
            <FontAwesome
              name="user-o"
              color="#2F85F8"
              size={25}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
              }}
              placeholder={userProfile.hovaten}
              returnKeyType="next"
              value={name.value}
              mode="outlined"
              underlineColor="transparent"
              selectionColor={theme.colors.primary}
              onChangeText={(text) => setName({ value: text, error: "" })}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          >
            <FontAwesome
              name="phone"
              color="#2F85F8"
              size={25}
              style={{ marginRight: 20 }}
            />
            <TextInput
              style={{
                width: "90%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                fontSize: 18,
              }}
              placeholder={userProfile.sdt}
              returnKeyType="next"
              value={phone.value}
              mode="outlined"
              underlineColor="transparent"
              selectionColor={theme.colors.primary}
              onChangeText={(text) =>
                setPhone({ value: text, error: phoneError })
              }
              keyboardType="numeric"
            />
          </View>
        </TouchableOpacity>
        <View
          style={[
            styles.menuItem,
            {
              borderTopColor: "#dddddd",
              borderTopWidth: 1,
            },
          ]}
        >
          <FontAwesome
            name="envelope-o"
            color="#2F85F8"
            size={25}
            style={{ marginRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>{userInfo.email}</Text>
        </View>

        <TouchableOpacity>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          >
            <FontAwesome
              name="intersex"
              color="#2F85F8"
              size={25}
              style={{ marginRight: 8 }}
            />
            <SelectDropdown
              data={genders}
              defaultValue={userProfile.gioitinh}
              onSelect={(selectedItem, index) => {
                setGioitinh(selectedItem);
              }}
              defaultButtonText={"Giới tính"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          >
            <MaterialIcons
              name="date-range"
              color="#2F85F8"
              size={25}
              style={{ marginRight: 10 }}
            />
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => setShow(true)}
              style={styles.textViewStyle}
            >
              <View style={styles.textStyle}>
                <Text style={{ fontSize: 16 }}>{birthday}</Text>
              </View>
            </TouchableHighlight>
            {show && (
              <DateTimePicker
                value={new Date(birthday)}
                mode="date"
                minimumDate={
                  new Date(moment().subtract(120, "years").format("YYYY-MM-DD"))
                }
                maximumDate={new Date(moment().format("YYYY-MM-DD"))}
                onChange={onChange}
              ></DateTimePicker>
            )}
          </View>
        </TouchableOpacity>
        {errorTextPhone ? (
          <Text style={styles.error}>{errorTextPhone}</Text>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={() => updateProfile()}
        style={styles.commandButton}
      >
        <Text style={styles.panelButtonTitle}>Hoàn thành</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingStart: 20,
  },
  circleShape: {
    width: "100%",
    height: "20%",
    borderRadius: 110 / 2,
    backgroundColor: "#2F85F8",
    marginTop: -100,
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingLeft: "10%",
  },
  profile: {
    width: "90%",
    height: 110,
    borderRadius: 40 / 2,
    backgroundColor: "#FFFFFF",
    marginTop: -45,
    borderWidth: 0.5,
    paddingLeft: 25,
    flexDirection: "row",
    paddingTop: 15,
  },
  infoBoxWapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
    marginTop: 10,
    backgroundColor: "#FFFFFF",
  },
  infoBox: {
    width: "50%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingLeft: 10,
    alignItems: "center",
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontSize: 16,
  },
  menuWapper: {
    marginTop: 10,
    width: "100%",
  },
  commandButton: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#2F85F8",
    alignItems: "center",
    marginTop: 10,
  },
  panelButtonTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  dropdown1BtnStyle: {
    width: "87%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#414757",
    marginVertical: 12,
  },
  dropdown1BtnTxtStyle: { color: "#414757", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#414757", textAlign: "left" },
  textViewStyle: {
    width: "80%",
    height: 50,
    alignItems: "flex-start",
    borderRadius: 5,
    marginVertical: 12,
    justifyContent: "center",
  },
  textStyle: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});

export default EditProfile;

import React, { useState } from "react";
import {
  Alert,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  View,
  Dimensions,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AddServiceModal from "../../components/Modals/AddServiceModal";
const { height, width } = Dimensions.get("window");
const Services = ({ navigation }) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const LogOut = (bool) => {
    setModalVisible(bool);
  };
  const CancelModal = (bool) => {
    setModalVisible(bool);
  };
  return (
    <SafeAreaView>
      <Modal
        visible={ModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => ModalVisible(false)}
      >
        <AddServiceModal LogOut={LogOut} cancelModal={CancelModal} />
      </Modal>
      <View style={{ flexDirection: "column", marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CatalogDetails");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Dịch vụ A
              </Text>
              <Text style={{ fontSize: 18 }}>DV1562022129</Text>
            </View>
          </View>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CatalogDetails");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Dịch vụ C
              </Text>
              <Text style={{ fontSize: 18 }}>DV1562022120</Text>
            </View>
          </View>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CatalogDetails");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Dịch vụ B
              </Text>
              <Text style={{ fontSize: 18 }}>DV1562022126</Text>
            </View>
          </View>
          <View
            style={[
              styles.menuItem,
              {
                borderTopColor: "#dddddd",
                borderTopWidth: 1,
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      >
        <AntDesign
          name="plus"
          size={20}
          color="#FCF4F4FF"
          style={{ marginStart: 15 }}
        />
        <Text
          style={{
            color: "#FCF4F4FF",
            fontSize: 18,
            marginLeft: 10,
          }}
        >
          Thêm dịch vụ
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  menuWapper: {
    marginTop: 10,
    width: "100%",
  },
  cusImage: {
    width: 80,
    height: 90,
    borderRadius: 50 / 2,
    borderWidth: 0.4,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  addButton: {
    width: 195,
    height: 50,
    borderRadius: 100 / 2,
    borderWidth: 0.4,
    backgroundColor: "white",
    marginStart: "45%",
    marginTop: height / 2 + 100,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: "#2F85F8",
  },
  infoBox: {
    width: "100%",
    height: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop: "120%",
    elevation: 5,
    flexDirection: "column",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    marginLeft: 0,
  },
  modalText: {
    marginBottom: 15,
  },
  textContainer: {},
});

export default Services;
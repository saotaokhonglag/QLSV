import {
  View,
  Text,
  ScrollView,
  Button,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import editPd from "../screens/students/EditPd";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const confirmItems = ({ info }) => {
  const navigation = useNavigation();
  const { id, idsp, tensp, gia, image, soluong, trangthai, img } = info;

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(gia);
      }}
      style={styles.products}
    >
      <View style={styles.imageProducts}>
        <ImageBackground
          source={{
            uri: "https://hinhnen123.com/wp-content/uploads/2021/06/anh-avatar-cute-dep-nhat-5.jpg",
          }}
          style={{ height: 65, width: 65 }}
        />
        <Text style={{ paddingLeft: 20, fontSize: 15 }}>{tensp}</Text>
      </View>

      <View style={styles.priceProducts}>
        <Text style={{ ...styles.textProduct, fontWeight: "bold" }}>
          {gia.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
        </Text>
        <Text style={styles.textProduct}>x{soluong}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  products: {
    width: width,
    height: 80,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
  },
  priceProducts: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textProduct: {
    fontSize: 18,
    color: "#FF0000",
  },
  imageProducts: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default confirmItems;
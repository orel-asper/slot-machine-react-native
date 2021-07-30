import React from "react";
//TODO -> implement the platform select to import IOS and Andriod style
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const SlotButton = ({ color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Image
        source={require("../assets/spinBtn.png")}
        style={styles.imageBtn}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    top: 100,
    display: "flex",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  imageBtn: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 20,
    margin: 12,
    textAlign: "center",
  },
});

export default SlotButton;

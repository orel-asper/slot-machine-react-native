import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SlotMachine from "./SlotMachine";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <SlotMachine />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

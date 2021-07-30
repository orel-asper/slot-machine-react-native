import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Animated, ImageBackground } from "react-native";

import Slot from "./components/Slot";
import SlotButton from "./components/SlotButton";
import { handleSpinAll, handleStopAll } from "./animation/handleSpin";
import Prizes from "./components/Prizes";

export default React.memo(function SlotMachine() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prizesArray, setPrizesArray] = useState([]);
  const slotOneAnim = useRef(new Animated.Value(0)).current;
  const slotTwoAnim = useRef(new Animated.Value(0)).current;
  const slotThreeAnim = useRef(new Animated.Value(0)).current;
  // const slotFourAnim = useRef(new Animated.Value(0)).current;
  // const slotFiveAnim = useRef(new Animated.Value(0)).current;
  // const slotSixAnim = useRef(new Animated.Value(0)).current;
  //you can add more
  const slots = [
    { num: 1, ref: slotOneAnim },
    { num: 2, ref: slotTwoAnim },
    { num: 3, ref: slotThreeAnim },
    // { num: 4, ref: slotFourAnim },
    // { num: 5, ref: slotFiveAnim },
    // { num: 6, ref: slotSixAnim },
  ];

  const spinAll = () => handleSpinAll(slots, isSpinning, setIsSpinning);
  const stopAll = () =>
    handleStopAll(slots, isSpinning, setIsSpinning, setPrizesArray);

  useEffect(() => {
    setTimeout(() => {
      stopAll();
    }, 5000);
  }, [spinAll]);

  return (
    <View style={styles.container}>
      <View style={styles.slotContainer}>
        {slots.map((slot) => (
          <Slot
            key={`slot${Math.random()}`}
            slotNum={slot.num}
            animate={slot.ref}
          />
        ))}
      </View>
      <ImageBackground
        source={require("./assets/slot.png")}
        style={{
          width: 450,
          height: 450,
          position: "absolute",
        }}
      />
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: -1,
        }}
      />
      <SlotButton onPress={spinAll} />
      <Prizes prizesArray={prizesArray} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  slotContainer: {
    flexDirection: "row",
  },
});

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const Prizes = ({ prizesArray }) => {
  const [result, setResult] = useState([]),
    winingNumbers = prizesArray && prizesArray.map((x) => parseInt(x)),
    symbols = [
      { 0: "horseshoe", amount: 2 },
      { 1: "diamond", amount: 5 },
      { 2: "cherry", amount: 10 },
      { 3: "seven", amount: 20 },
      { 4: "cube", amount: 40 },
      { 5: "cash", amount: 50 },
      { 6: "bar", amount: 70 },
      { 7: "bell", amount: 100 },
      { 8: "clover", amount: 250 },
      { 9: "crown", amount: 1000 },
    ],
    getOccurrence = (array, value) => {
      return array.filter((v) => v === value).length;
    };

  // console.log(winingNumbers, "prizes", result);
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!winingNumbers) return;
      winingNumbers.map((p) => {
        let prizeName = symbols[p],
          Sequences = getOccurrence(winingNumbers, p);

        Sequences === 2 && setResult([prizeName, 2]);
        Sequences === 3 && setResult([prizeName, 3]);
        symbols[p] === symbols[2] && setResult([prizeName, 1]);
        Sequences === 2 &&
          symbols[p] === symbols[2] &&
          setResult([prizeName, 4]);
      });
    }, 3 * 1000);
    timeout = setTimeout(() => {
      setResult([]);
    }, 8 * 1000);
    return () => clearTimeout(timeout);
  }, [prizesArray]);

  return (
    <>
      {result[1] && (
        <LottieView
          source={require("../assets/lottie-animations/confetti.json")}
          style={{ width: 500, position: "absolute" }}
          autoPlay
          loop
        />
      )}
      {result[1] === 3 && (
        <LottieView
          source={require("../assets/lottie-animations/coinrain.json")}
          style={{ width: 700, position: "absolute" }}
          autoPlay
          loop
        />
      )}
    </>
  );
};

export default Prizes;

const styles = StyleSheet.create({});

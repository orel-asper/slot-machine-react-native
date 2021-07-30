import React from "react";
import { StyleSheet, View, Animated, Image } from "react-native";
import { slotImages } from "../helpers/images";

const Slot = ({ animate, slotNum }) => {
  return (
    <View style={styles.slotContainer}>
      <ItemContainer
        key={`slotNum${Math.random()}`}
        animate={animate}
        slotNum={slotNum}
      />
    </View>
  );
};

const ItemContainer = ({ slotNum, animate }) => {
  const items = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
  return (
    <View style={[styles.itemContainer, { transform: [{ translateY: -400 }] }]}>
      <Animated.View
        style={{
          transform: [{ translateY: animate }],
        }}
      >
        {items.map((item) => {
          return (
            <Item key={`slotNum_${slotNum}_idx_${item}_${Math.random()}`}>
              {item}
            </Item>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({ children }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={slotImages.Symbol[children]}
        style={{
          width: 60,
          height: 60,
          position: "absolute",
          // opacity: 0.7,
        }}
      />
      {/* <Text>{children}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  slotContainer: {
    display: "flex",
    width: 80,
    height: 100,
    top: 50,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  itemContainer: {
    width: 80,
    height: 100,
    borderWidth: 1,
    borderColor: "gold",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Slot;

import React from "react";
import { Image, View, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.deleteIcon} />
      <View style={styles.cancelIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  cancelIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#4ECDC4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;

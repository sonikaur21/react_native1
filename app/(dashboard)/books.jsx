import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { StyleSheet } from "react-native";

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />

      <ThemedText title={true} style={StyleSheet.heading}>
        Your Reading List
      </ThemedText>
    </ThemedView>
  );
};
export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

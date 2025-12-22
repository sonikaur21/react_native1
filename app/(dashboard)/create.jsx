import React from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { StyleSheet } from "react-native";

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={StyleSheet.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />
    </ThemedView>
  );
};
export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});

import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        The number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText> Login Page </ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontWeight: "bold", fontSize: "18", marginTop: 15 },
  img: { width: 200, height: 150 },

  link: { marginVertical: 10, borderBottomWidth: 1, marginTop: 15 },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>about page</Text>
      <Link href="/" style={styles.link}>
        {" "}
        Back Home{" "}
      </Link>
    </View>
  );
};

export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: { fontWeight: "bold", fontSize: "18" },
  link: { marginVertical: 10, borderBottomWidth: 1, marginTop: 15 },
});

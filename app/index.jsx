import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Logo from "../assets/img/profile.jpg";

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <View>
        <Text style={styles.card}> Hello, this is a card</Text>
      </View>
      <Link href="/about" style={styles.link}>
        {" "}
        About Page
      </Link>
      <Link href="/contact" style={styles.link}>
        {" "}
        Contact Page
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: { fontWeight: "bold", fontSize: "18", marginTop: 15 },
  img: { width: 200, height: 150 },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: { marginVertical: 10, borderBottomWidth: 1, marginTop: 15 },
});

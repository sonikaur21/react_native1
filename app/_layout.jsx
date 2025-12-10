import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="contact" options={{ title: "Contact" }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

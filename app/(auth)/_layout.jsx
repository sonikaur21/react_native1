import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false, //you can remove this if you wanted to show at the head of the page
          animation: "none",
        }}
      />
    </>
  );
}

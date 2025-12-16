import { Image, useColorScheme } from "react-native";
import React from "react";
import DarkLogo from "../assets/img/dark.png";
import LightLogo from "../assets/img/light.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;

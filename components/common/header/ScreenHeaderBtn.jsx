import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimensions }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMethod="cover"
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

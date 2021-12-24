import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from '../constants/colors'
import { TitleText } from "./TitleText";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
  },
});

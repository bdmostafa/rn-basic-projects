import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const GoalItem = ({ id, title, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#cccddd",
    borderColor: "gray",
    borderWidth: 1,
  },
});

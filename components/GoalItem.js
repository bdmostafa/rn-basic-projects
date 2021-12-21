import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({title}) => {
    return (
        <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: "#cccddd",
      borderColor: "gray",
      borderWidth: 1,
    },
  });
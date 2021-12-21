import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.screen}>
      <View>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.inputContainer}
        />
        <Button title="ADD" />
      </View>

      <View
        style={{
          padding: 50,
          flexDirection: "row",
          width: "80%",
          height: 300,
          justifyContent: "space-around",
          alignItems: "stretch",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>2</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    marginBottom: 5,
  },
});

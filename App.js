import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={{ padding: 25 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter Course Goal"
          style={{
            borderWidth: 1,
            borderColor: "gray",
            padding: 5,
            width: '80%'
          }}
        />
        <Button title="ADD" />
      </View>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

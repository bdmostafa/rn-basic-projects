import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const goalAdditionHandler = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color="orange" />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={goalAdditionHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 5
  },
  button: {
    width: "40%",
  },
});

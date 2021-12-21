import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (newGoal, setEnteredGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: newGoal },
    ]);
    setEnteredGoal("");
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />

      {/* <ScrollView>
          {courseGoals.length > 0 && <Text>You added:</Text>}
          {courseGoals.map((goal) => (
            <View style={styles.listItem} key={goal}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            id={itemData.item.id}
            // onDelete={() => removeGoalHandler(itemData.item.id)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 25,
  },
  inputContainer: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#cccddd",
    borderColor: "gray",
    borderWidth: 1,
  },
});

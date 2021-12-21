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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>

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
        renderItem={(itemData) => {
          {console.log(itemData)}
          return (<View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>)
        }}
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

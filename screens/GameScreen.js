import React, { useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { NumberContainer } from "../components/NumberContainer";

export const GameScreen = ({ userChoice }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (randomNumber === exclude) {
      console.log('okkkk', randomNumber, exclude)
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNumber;
    }
  };

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert(
        "Don't lie!",
        "You have already known that this is wrong!!!",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };
  console.log(currentLow, currentHigh);
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            nextGuessHandler("lower");
          }}
        />
        <Button
          title="GREATER"
          onPress={() => {
            nextGuessHandler("greater");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

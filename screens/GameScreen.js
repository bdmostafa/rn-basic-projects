import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/Card";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";
import { AntDesign } from "@expo/vector-icons";

export const GameScreen = ({ userChoice, onGameOver }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState(0);

  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);

    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (randomNumber === exclude) {
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
    setRounds((curRounds) => curRounds + 1);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <PrimaryButton
          style={styles.btnLower}
          onPress={() => {
            nextGuessHandler("lower");
          }}
        >
          <AntDesign name="minuscircleo" size={24} color="white" />
        </PrimaryButton>
        <PrimaryButton
          style={styles.btnGreater}
          onPress={() => {
            nextGuessHandler("greater");
          }}
        >
          <AntDesign name="pluscircleo" size={24} color="white" />
        </PrimaryButton>
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
    maxWidth: "90%",
  },
  btnLower: {
    backgroundColor: Colors.accent,
  },
  btnGreater: {
    backgroundColor: Colors.primary,
  },
});

import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "../components/Card";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";
import { AntDesign } from "@expo/vector-icons";
import { BodyText } from "../components/BodyText";

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

// Function for ScrollView
// const renderListItem = (value, numOfRounds) => {
//   return (
//     <View key={value} style={styles.listItem}>
//       <BodyText>#{numOfRounds}</BodyText>
//       <BodyText>{value}</BodyText>
//     </View>
//   );
// };

// Function for FlatList
const renderListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

export const GameScreen = ({ userChoice, onGameOver }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const initialGuess = generateRandomBetween(1, 100, userChoice);

  // const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    // setRounds((curRounds) => curRounds + 1);
    setPastGuesses((currentGuesses) => [nextNumber.toString(), ...currentGuesses]);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  let listContainerStyle = styles.listContainer;

  if (Dimensions.get('window').width < 350) {
    listContainerStyle = styles.listContainerBig;
  }

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

      <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, idx) =>
            renderListItem(guess, pastGuesses.length - idx)
          )}
        </ScrollView> */}

        {/* FlatList usage instead of ScrollView */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}>
        </FlatList>
      </View>
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
    // marginTop: 20,
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    width: 300,
    maxWidth: "90%",
  },
  btnLower: {
    backgroundColor: Colors.accent,
  },
  btnGreater: {
    backgroundColor: Colors.primary,
  },
   listContainer: {
    flex: 1,
    width: '60%'
  },
  listContainerBig: {
    flex: 1,
    width: '80%'
  },
  list: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "lightgray",
    borderWidth: 1,
    padding: Dimensions.get("window").width > 350 ? 15 : 10,
    marginVertical: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

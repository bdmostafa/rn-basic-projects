import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { BodyText } from "../components/BodyText";
import { TitleText } from "../components/TitleText";
import Colors from "../constants/colors";

export const GameOverScreen = ({ roundsNumber, onRestart, userNumber }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //   source={require("../assets/gameover.jpg")}
          fadeDuration={1000}
          source={{
            uri:
              "https://media.gettyimages.com/videos/game-over-neon-sign-style-flashing-number-movement-animation-video-id1331247012?s=640x640",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.highlight}>
            {roundsNumber}{" "}
          </Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}> {userNumber} </Text>{" "}
        </BodyText>
      </View>

      <View style={{ marginTop: 25 }}>
        <Button title="NEW GAME" onPress={onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

import React from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BodyText } from "../components/BodyText";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleText } from "../components/TitleText";
import Colors from "../constants/colors";

export const GameOverScreen = ({ roundsNumber, onRestart, userNumber }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText style={styles.title}>The Game is Over!</TitleText>
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
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.highlight}
            >
              {roundsNumber}{" "}
            </Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highlight}> {userNumber} </Text>{" "}
          </BodyText>
        </View>

        <View>
          <PrimaryButton onPress={onRestart}>NEW GAME</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: Dimensions.get("window").height < 400 ? 10 : 20,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: Colors.primary,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 35,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

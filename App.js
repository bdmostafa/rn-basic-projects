import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Header } from "./components/Header";
import { GameOverScreen } from "./screens/GameOverScreen";
import { GameScreen } from "./screens/GameScreen";
import { StartGamesScreen } from "./screens/StartGamesScreen";

// import AppLoading from "expo-app-loading";
import { CustomAppLoading } from "./components/CustomAppLoading";
import { fetchFonts } from "./misc/FetchFonts";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  // const [isDataLoaded, setIsDataLoaded] = useState(false);

  // if (!isDataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setIsDataLoaded(true)}
  //       onError={(error) => console.log(error)}
  //     />
  //   );
  // }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGamesScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <CustomAppLoading startAsync={fetchFonts}>
        <Header title="Guess a Number" />
        {content}
      </CustomAppLoading>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  NativeModules, 
} from "react-native";
import Routes from "./src/navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";

// const Connectivity=NativeModules?.Connectivity
// const handleBackButton = () => {
//     BackHandler.exitApp(); // Exit the app when back button is pressed
//     // Alternatively, you can use BackHandler to handle custom navigation logic
//     // For example:
//     // navigation.goBack(); // If using React Navigation
//   };

const RNHighScores = () => {
  // const { action, platform } = props?.initialProps;
  return (
    <NavigationContainer>
      <Routes />
</NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   highScoresTitle: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   scores: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5,
//   },
// });

// Module name
AppRegistry.registerComponent("RNHighScores", () => RNHighScores);

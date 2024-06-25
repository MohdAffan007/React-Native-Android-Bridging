import { useNavigation } from "@react-navigation/native";
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

const Connectivity = NativeModules?.Connectivity
const handleBackButton = () => {
  BackHandler.exitApp(); // Exit the app when back button is pressed
  // Alternatively, you can use BackHandler to handle custom navigation logic
  // For example:
  // navigation.goBack(); // If using React Navigation
};



export default function FirstScreen(props) {

  const navigation = useNavigation();
  // const { action, platform } = props?.initialProps;
  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>React Native Screen</Text>
      <Text style={styles.highScoresTitle}>
      sss
      </Text>
      <TouchableOpacity onPress={handleBackButton}>
        <Text style={styles.backButton}>Back to Android</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {

        navigation.navigate('SecondScreen')
      }}>
        <Text >Go To React Native Second scren</Text>
      </TouchableOpacity>
      <Text onPress={() => {
        console.log('check it', NativeModules?.Connectivity)
        Connectivity?.goToSecondActivity()
      }} style={{ marginTop: 10 }}>Move to second Native screen</Text>
      <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={()=>navigation.navigate('SecondScreen')}>
        <Text>
          Move To Second RN Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  scores: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
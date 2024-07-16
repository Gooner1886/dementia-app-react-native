import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

function EmergencySos() {
  return (
    <View style={styles.sosPage}>
      <View style={styles.headerText}>
        <Text style={styles.text}>Need Help?</Text>
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Emergency Call</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.questionSection}>
        <Text style={styles.questext}>What's my next pill?</Text>
        <Text style={styles.questext}>Find my way home</Text>
      </View>
      <View style={styles.iconSection}>
      <Icon name="phone" size={50} color="#5D45DB" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sosPage: {
    display: "flex",
    flexDirection: "column",
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  text: {
    fontFamily: "Gelion, sans-serif",
    fontSize: 30,
  },
  text1: {
    fontFamily: "Gelion, sans-serif",
    fontSize: 20,
    color: '#fff'
  },
  buttonSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "#5D45DB", // Navy blue color
    borderRadius: 100, // Half of the width and height to make it circular
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  questionSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: '30vh'
  },
  questext: {
    color: "#5D45DB",
    fontFamily: "Gelion, sans-serif",
    fontSize: 30,
  },
  iconSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '17vh'
  },
});

export default EmergencySos;

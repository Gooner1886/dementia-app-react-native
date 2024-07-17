import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-web";
import { useNavigation } from '@react-navigation/native';

function EmergencySos2() {
    const navigation = useNavigation()
  return (
    <View style={styles.sosPage2}>
      <View style={styles.headerSection}>
        <Text style={styles.text}>Emergency Call</Text>
      </View>
      <View style={styles.helperSection}>
        <View style={styles.helper}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/34bfdc475ecd25d3077a33b267d65a802a32ccbb0969bf35394d8bfed741df15?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
          ></Image>
          <Text style={styles.name}>Caregiver</Text>
        </View>
        <View style={styles.helper}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/34bfdc475ecd25d3077a33b267d65a802a32ccbb0969bf35394d8bfed741df15?apiKey=12fbf716322d41b9b96b841cf19d799b&",
            }}
          ></Image>
          <Text style={styles.name}>Daughter</Text>
        </View>
      </View>
      <View style={styles.cancelSection}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.navigate("EmergencySos")}
        >
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sosPage2: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#5D45DB",
  },
  headerSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  },
  text: {
    fontFamily: "Gelion, sans-serif",
    fontSize: 30,
    color: "#fff",
  },
  helperSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    height: "40vh",
  },
  helper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 20,
  },
  avatar: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  name: {
    color: "#000",
    fontFamily: "Gelion, sans-serif",
    fontSize: 20,
  },
  cancelSection: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    height: "30vh",
  },
  cancelButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#5D45DB", // Navy blue color
    borderRadius: 50, // Half of the width and height to make it circular
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text1: {
    fontFamily: "Gelion, sans-serif",
    fontSize: 10,
    color: '#fff'
  }
});

export default EmergencySos2;

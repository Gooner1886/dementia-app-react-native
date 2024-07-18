import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DiagnosisOptions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CookieTheft")}
      s>
        <Text style={styles.buttonText}>Cookie Theft Diagnosis</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Survey")}
      >
        <Text style={styles.buttonText}>Questionnaire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Background color
  },
  button: {
    backgroundColor: "#5D45DB", // Primary color
    width: "80%",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Gelion, sans-serif",
  },
});

export default DiagnosisOptions;

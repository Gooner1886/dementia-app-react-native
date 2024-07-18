import * as React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

function ChooseRole() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.fontMedium}>Choose your </Text>
          <Text style={styles.fontBold}>role</Text>
        </Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/34bfdc475ecd25d3077a33b267d65a802a32ccbb0969bf35394d8bfed741df15?apiKey=12fbf716322d41b9b96b841cf19d799b&",
          }}
          style={styles.image}
        />
        <Pressable style={styles.button} onPress={() => navigation.navigate('SOS')}>
          <Text style={styles.buttonText}>SOS</Text>
        </Pressable>
       <Pressable style={styles.button} onPress={() => navigation.navigate('PuzzleGame')}>
          <Text style={styles.buttonText}>Puzzle Game</Text>
        </Pressable>
       <Pressable style={styles.button} onPress={() => navigation.navigate('LoginCaregiver')}>
          <Text style={styles.buttonText}>Caregiver</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('LoginPatient')}>
          <Text style={styles.buttonText}>Patient</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 480,
    backgroundColor: "#5D45DB",
    alignItems: "center",
  },
  header: {
    marginLeft: 16,
    width: 289,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 64,
    color: "#FFF",
  },
  fontMedium: {
    fontFamily: 'Gelion, sans-serif',
    fontWeight: "400",
  },
  fontBold: {
    fontFamily: 'Gelion, sans-serif',
    fontWeight: "700",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    marginTop: 44,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 29,
    borderTopRightRadius: 29,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 0,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 20,
    width: "90%",
    maxWidth: 344,
    backgroundColor: "#5D45DB",
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: 'Gelion, sans-serif',
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
    textAlign: "center",
  },
});

export default ChooseRole;

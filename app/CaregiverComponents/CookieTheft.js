import "regenerator-runtime/runtime";
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import CookieTheftImage from "../assets/CookieTheftImage1.jpg";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const CookieTheft = () => {
  const navigation = useNavigation();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const stopListening = () => SpeechRecognition.stopListening();

  const [gotVal, setGotval] = useState(3);

  const submitTranscript = async () => {
    stopListening();
    console.log(transcript);
    const resp = await axios.post("http://127.0.0.1:5000/api/cookie-theft", {
      transcript: transcript,
    });
    console.log(resp);
    if (resp.data.level == 1) setGotval(1);
    else setGotval(2);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <View style={styles.container}>
      <Image source={CookieTheftImage} style={styles.image} />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <TouchableOpacity onPress={startListening} style={styles.micButton}>
        <Icon name="microphone" size={30} color="#FFF" />
      </TouchableOpacity>
      {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
      <button onClick={submitTranscript} style={styles.button}>
        Stop
      </button>
      <button onClick={resetTranscript} style={styles.button}>
        Reset
      </button>
      <Text style={styles.textBox}>{transcript}</Text>
      {gotVal == 1 && (
        <Text style={styles.godoc}>
          You seem to show signs of borderline alzeihmers with a score of 40%.
          But do not panic! Head over to our docubot.
        </Text>
      )}
      {gotVal == 2 && <Text>No you do not seem to have dementia!</Text>}
    </View>
  );
};

{
  /* <View style={styles.container}>
  <Image source={CookieTheftImage} style={styles.image} />
  <TouchableOpacity
    onPress={isRecording ? stopRecording : startRecording}
    style={styles.micButton}
  >
    <Icon name="microphone" size={30} color="#FFF" />
  </TouchableOpacity>
  <TextInput
    style={styles.textBox}
    value={recordedText}
    placeholder="Transcribed text will appear here"
    multiline
    editable={false}
  />
</View>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  micButton: {
    backgroundColor: "#5D45DB",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textBox: {
    width: "100%",
    height: 100,
    borderColor: "#5D45DB",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
  },
  button: {
    color: "#fff",
    backgroundColor: "#5d45db",
    width: "25%",
    height: "5%",
    borderRadius: 15,
    marginBottom: 20,
  },
  godoc: {
    fontFamily: "Gelion",
    fontSize: 20,
  },
});
export default CookieTheft;

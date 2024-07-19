import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CookieTheftImage from '../assets/CookieTheftImage1.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';

const CookieTheft = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({ continuous: true });


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <View style={styles.container}>
      <Image source={CookieTheftImage} style={styles.image} />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <TouchableOpacity
        onPress={startListening}
        style={styles.micButton}
      >
        <Icon name="microphone" size={30} color="#FFF" />
      </TouchableOpacity>
      {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
      <button onClick={SpeechRecognition.stopListening} style={styles.button}>Stop</button>
      <button onClick={resetTranscript} style={styles.button}>Reset</button>
      <Text style={styles.textBox}>{transcript}</Text>
    </View>
  );
};

{/* <View style={styles.container}>
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
</View>; */}

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
    color: '#fff',
    backgroundColor: '#5d45db',
    width: '25%',
    height: '5%',
    borderRadius: 15,
    marginBottom:20
  }
});
export default CookieTheft;

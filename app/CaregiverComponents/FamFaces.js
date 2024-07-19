import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Video } from "expo-av";
import RadioGroup from "react-native-radio-group";
import TextToVideo from '../assets/TextToVideo.mp4'

const FamFaces = () => {
  const [text, setText] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [selectedGender, setSelectedGender] = useState('male');

  const handleSubmit = () => {
    if (text.trim()) {
      setShowVideo(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        placeholderTextColor="#ccc"
        value={text}
        onChangeText={setText}
      />
      {/* <Text style={styles.label}>Select gender:</Text> */}
      {/* <RadioGroup
        containerStyle={styles.radioGroup}
        selectedValue={selectedGender}
        onChange={setSelectedGender}
      >
        <View style={styles.radioOption}>
          <RadioGroup.RadioButton value="male" />
          <Text style={styles.radioLabel}>Male</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioGroup.RadioButton value="female" />
          <Text style={styles.radioLabel}>Female</Text>
        </View>
      </RadioGroup> */}
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#5d45db" onPress={handleSubmit} />
      </View>
      {showVideo && (
        <Video
          source={TextToVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          style={styles.video}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  textInput: {
    height: 120,
    borderColor: "#5d45db",
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    paddingLeft: 8,
    borderRadius: 5,
    color: "#333",
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 10,
  },
  video: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
});

export default FamFaces;

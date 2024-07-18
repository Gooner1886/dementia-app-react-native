import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Audio } from 'expo-av';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/FontAwesome';
import CookieTheftImage from '../assets/CookieTheftImage1.jpg'

const CookieTheft = () => {
  const [recordedText, setRecordedText] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event) => {
    setRecordedText(event.value[0]);
  };

  const onSpeechError = (event) => {
    console.error(event.error);
    setIsRecording(false);
  };

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      setIsRecording(true);
      await Voice.start('en-US');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setIsRecording(false);
    } catch (err) {
      console.error('Failed to stop recording', err);
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  micButton: {
    backgroundColor: '#5D45DB',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textBox: {
    width: '100%',
    height: 100,
    borderColor: '#5D45DB',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
  },
});

export default CookieTheft;

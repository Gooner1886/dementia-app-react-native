import { useNavigation } from "@react-navigation/native";

import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

function CalenderView() {
  const navigation = useNavigation();

  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [markeddates, setMarkeddates] = useState({});
  const [gotval, setGotval] = useState(false);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const stopListening = () => SpeechRecognition.stopListening();

  const submitCalender = async () => {
    stopListening();
    console.log(transcript);
    const resp = await axios.post("http://127.0.0.1:5000/api/get-calender", {
      transcript: transcript,
    });

    axios
      .post("http://127.0.0.1:5000/api/get-calender", {
        transcript: transcript,
      })
      .then((resp) => {
        setDate(resp["data"][0]);
        setDesc(resp["data"][1]);
        setMarkeddates({
          "2024-07-22": {
            marked: false,
            selected: true,
            selectedColor: "#5D45DB",
          },
        });
      });

    // setDate(resp["data"][0]);
    // setDesc(resp["data"][1]);
    setGotval(true);

    console.log(resp.data);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const [modalVisible, setModalVisible] = useState(false);

  // const markedDates = {
  //   [date]: { marked: false, selected: true, selectedColor: "#5D45DB" },
  // };

  const onDayPress = (day) => {
    if (day.dateString === "2024-07-22") {
      setModalVisible(true);
    }
  };

  // const markedDates = {
  //   [date]: {
  //     marked: false,
  //     selected: true,
  //     selectedColor: "#5D45DB",
  //   },
  // };

  return (
    <>
      <View style={styles.container}>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <TouchableOpacity onPress={startListening} style={styles.micButton}>
          <Icon name="microphone" size={30} color="#FFF" />
        </TouchableOpacity>
        {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
        <button onClick={submitCalender} style={styles.button}>
          Submit
        </button>
        {/* <button onClick={resetTranscript} style={styles.button}>
          Reset
        </button> */}
        <Text style={styles.textBox}>{transcript}</Text>
      </View>
      {gotval && markeddates && (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Calendar
              markedDates={markeddates}
              onDayPress={onDayPress}
              theme={{
                todayTextColor: "#5D45DB", // Change this to your desired color
                todayBackgroundColor: "#E6E1FF", // Optional: adds a background to today's date
              }}
            />
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Eat medicines and visit the clinic
                  </Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.roundbutton}
                      onPress={() => setModalVisible(false)}
                    >
                      <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFF",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(93, 69, 219, 0.5)",
  },
  modalView: {
    width: "85%",
    height: "40%",
    // marginBottom: 50,
    // marginRight : 20,
    marginTop: 20,
    backgroundColor: "#E6E1FF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-between",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
  },
  roundbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#5D45DB",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
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
    height: "10%",
    borderRadius: 15,
    marginBottom: 20,
  },
});

export default CalenderView;


import { useNavigation } from '@react-navigation/native';

import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

function CalenderView() {
  const navigation = useNavigation();


  const [modalVisible, setModalVisible] = useState(false);

  // Set your birthday here
  const birthdayDate = '2024-05-15';
  const birthdayDescription = 'Your Birthday!';

  const markedDates = {
    [birthdayDate]: { marked: false, selected: true, selectedColor: "#5D45DB" }
  };

  const onDayPress = (day) => {
    if (day.dateString === birthdayDate) {
      setModalVisible(true);
    }
  };


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Calendar
          markedDates={markedDates}
          onDayPress={onDayPress}
          theme={{
            todayTextColor: '#5D45DB', // Change this to your desired color
            todayBackgroundColor: '#E6E1FF', // Optional: adds a background to today's date
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
              <Text style={styles.modalText}>{birthdayDescription}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
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
  );
}

const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(93, 69, 219, 0.5)', 
  },
  modalView: {
    width: '85%',
    height: '40%',
    // marginBottom: 50,
    // marginRight : 20,
    marginTop : 20,
    backgroundColor: '#E6E1FF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  buttonContainer: {
   
    width: '100%',
    alignItems: 'center',
    marginTop : 'auto',
 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#5D45DB',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
})


export default CalenderView;

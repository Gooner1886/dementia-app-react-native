import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Button, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as DocumentPicker from 'expo-document-picker';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [clinicAddress, setClinicAddress] = useState('');
  const [familyContactNo, setFamilyContactNo] = useState('');
  const [report, setReport] = useState(null);

  const handleReportUpload = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setReport(result.uri);
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ name, age, gender, doctorName, clinicAddress, report });
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/92c428dedd8aab43796d641e5e01988193cdf95c8b92feb38e3c5b789749e6c3?apiKey=12fbf716322d41b9b96b841cf19d799b&",
        }}
        style={styles.image}
      />
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioGroup}>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioButton}>
            <RadioButton value="male" />
            <Text>Male</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="other" />
            <Text>Other</Text>
          </View>
        </RadioButton.Group>
      </View>
      <Text style={styles.label}>Doctor Name</Text>
      <TextInput
        style={styles.input}
        value={doctorName}
        onChangeText={setDoctorName}
      />
      <Text style={styles.label}>Clinic Address</Text>
      <TextInput
        style={styles.input}
        value={clinicAddress}
        onChangeText={setClinicAddress}
      />
      <Text style={styles.label}>Family contact no</Text>
      <TextInput
        style={styles.input}
        value={familyContactNo}
        onChangeText={setFamilyContactNo}
      />
      <br></br>
      <TouchableOpacity style={styles.button} onPress={handleReportUpload}>
        <Text style={styles.buttonText}>Upload Report</Text>
      </TouchableOpacity>
      {/* {report && <Text style={styles.reportText}>Report uploaded</Text>} */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {/* <Button title="Upload Report" onPress={handleReportUpload} />
      {report && <Text style={styles.reportText}>Report uploaded</Text>}
      <br></br>
      <Button title="Submit" onPress={handleSubmit} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    color: "#B5B5B5",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#B5B5B5",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  radioGroup: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportText: {
    marginTop: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#5D45DB', // Customize the color here
    padding: 15,
    borderRadius: 20, // Customize the radius here
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white', // Customize the font color here
    fontWeight: 'bold',
  },
  image: {
    width: "100%",
    height: "10%",
    aspectRatio: 2,
    marginBottom: 20,
    marginLeft: -120,
    marginTop: -25
  }
});

export default AddPatient;

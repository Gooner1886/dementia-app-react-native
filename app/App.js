// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import ChooseRole from "./ChooseRole";
import LoginCaregiver from "./LoginCaregiver";
import LoginPatient from "./LoginPatient";
import FirstPage from "./PatientComponents/FirstPage";
import FirstPageCaregiver from "./CaregiverComponents/FirstPageCaregiver";
import MemoryPairGame from "./PuzzleGame/MemoryPairGame";
import SOS from "./sos/SOS";
import { app, firestore, auth, db } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import MediaPicker from "./CaregiverComponents/MediaPicker";
import CarouselCards from "./CaregiverComponents/CarouselCard";
import * as Font from "expo-font";
import DementiaBot from "./DementiaBot";
import DiagnosisOptions from "./CaregiverComponents/DiagnosisOptions";
import CookieTheft from "./CaregiverComponents/CookieTheft";
import Survey from "./CaregiverComponents/Survey";
import Survey2 from "./CaregiverComponents/Survey2";
import Survey3 from "./CaregiverComponents/Survey3";
import AddPatient from "./CaregiverComponents/AddPatient";
import FamFaces from "./CaregiverComponents/FamFaces";
import PatientHealthRecordBot from "./PatientHealthRecordBot";
import CalenderView from "./CalenderView";

const Stack = createStackNavigator();

const q = query(collection(firestore, "articles"));

const App = () => {
  async function loadFonts() {
    await Font.loadAsync({
      // Replace 'path/to/font' with the actual path to your font file
      // and 'Galion' with the correct font name if it differs
      Gelion: require("./assets/Gelion_Regular.ttf"),
    });
  }

  React.useEffect(() => {
    loadFonts();
  }, []);

  const checkFirestoreConnection = async () => {
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc);
    });
  };

  // Call the Firestore check function when the app starts
  React.useEffect(() => {
    checkFirestoreConnection();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ChooseRole" component={ChooseRole} />
        <Stack.Screen name="LoginPatient" component={LoginPatient} />
        <Stack.Screen name="LoginCaregiver" component={LoginCaregiver} />
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen
          name="FirstPageCaregiver"
          component={FirstPageCaregiver}
        />
        <Stack.Screen name="PuzzleGame" component={MemoryPairGame} />
        <Stack.Screen name="SOS" component={SOS} />
        <Stack.Screen name="DementiaBot" component={DementiaBot} />
        <Stack.Screen name="DiagnosisOptions" component={DiagnosisOptions} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Survey2" component={Survey2} />
        <Stack.Screen name="Survey3" component={Survey3} />
        <Stack.Screen name="CookieTheft" component={CookieTheft} />
        <Stack.Screen name="AddPatient" component={AddPatient} />
        <Stack.Screen name="FamFaces" component={FamFaces} />
        <Stack.Screen
          name="PatientHealthRecordBot"
          component={PatientHealthRecordBot}
        />
        <Stack.Screen name="CalenderView" component={CalenderView} />
        <Stack.Screen name="MediaPicker" component={MediaPicker} />
        <Stack.Screen name="CarouselCards" component={CarouselCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

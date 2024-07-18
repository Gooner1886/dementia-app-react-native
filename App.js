// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import ChooseRole from "./ChooseRole";
import LoginCaregiver from "./LoginCaregiver";
import LoginPatient from "./LoginPatient";
import FirstPagePatient from "./PatientComponents/FirstPage";
import Survey from "./PatientComponents/Survey";
import Survey2 from "./PatientComponents/Survey2";
import Survey3 from "./PatientComponents/Survey3";
import DiagnosisOptions from "./PatientComponents/DiagnosisOptions";
import CookieTheft from './PatientComponents/CookieTheft';
// import "core-js/stable";
import "regenerator-runtime/runtime";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ChooseRole" component={ChooseRole} />
        <Stack.Screen name="LoginCaregiver" component={LoginCaregiver} />
        <Stack.Screen name="LoginPatient" component={LoginPatient} />
        <Stack.Screen name="FirstPagePatient" component={FirstPagePatient} />
        <Stack.Screen name="DiagnosisOptions" component={DiagnosisOptions} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Survey2" component={Survey2} />
        <Stack.Screen name="Survey3" component={Survey3} />
        <Stack.Screen name="CookieTheft" component={CookieTheft} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

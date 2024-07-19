// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./LandingPage";
import ChooseRole from "./ChooseRole";
import LoginCaregiver from "./LoginCaregiver";
import LoginPatient from "./LoginPatient";
import FirstPagePatient from "./PatientComponents/FirstPage";
import DementiaBot from "./DementiaBot";
import Alexafeature from "./Alexafeature";
import PatientHealthRecordBot from "./PatientHealthRecordBot";

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
        <Stack.Screen name="DementiaBot" component={DementiaBot} />
        <Stack.Screen name="Alexafeature" component={Alexafeature} />
        <Stack.Screen
          name="PatientHealthRecordBot"
          component={PatientHealthRecordBot}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

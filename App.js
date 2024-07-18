// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ChooseRole from './ChooseRole';
import LoginCaregiver from './LoginCaregiver';
import LoginPatient from './LoginPatient';
import FirstPagePatient from './PatientComponents/FirstPage';
import EducationalHub from './PatientComponents/EducationalHub';
import MediaPicker from './PatientComponents/MediaPicker';
import CarouselComponent from './PatientComponents/CarouselComponent';
import CarouselCards from './PatientComponents/CarouselCard';
import AddPatient from './PatientComponents/AddPatient';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ChooseRole" component={ChooseRole} />
        <Stack.Screen name="LoginCaregiver" component={LoginCaregiver}  />
        <Stack.Screen name="LoginPatient" component={LoginPatient}  />
        <Stack.Screen name="FirstPagePatient" component={FirstPagePatient}  />
        <Stack.Screen name="EducationalHub" component={EducationalHub}  />
        <Stack.Screen name="MediaPicker" component={MediaPicker}  />
        <Stack.Screen name="CarouselComponent" component={CarouselComponent}  />
        <Stack.Screen name="CarouselCards" component={CarouselCards}  />
        <Stack.Screen name="AddPatient" component={AddPatient}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

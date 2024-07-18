// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ChooseRole from './ChooseRole';
import LoginCaregiver from './LoginCaregiver';
import LoginPatient from './LoginPatient';
import FirstPage from './PatientComponents/FirstPage';
import CarouselCards from './PatientComponents/CarouselCard';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="ChooseRole" component={ChooseRole} />
        <Stack.Screen name="LoginPatient" component={LoginPatient}  />
        <Stack.Screen name="LoginCaregiver" component={LoginCaregiver}  />
        <Stack.Screen name="FirstPage" component={FirstPage}  />
        <Stack.Screen name="CarouselCards" component={CarouselCards}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

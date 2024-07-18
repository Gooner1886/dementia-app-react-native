// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import ChooseRole from './ChooseRole';
import LoginCaregiver from './LoginCaregiver';
import LoginPatient from './LoginPatient';
import FirstPage from './PatientComponents/FirstPage';
import FirstPageCaregiver from './CaregiverComponents/FirstPageCaregiver';
import MemoryPairGame from './PuzzleGame/MemoryPairGame';
import SOS from './sos/SOS';
import { app, firestore, auth, db } from './firebaseConfig';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";



const Stack = createStackNavigator();

const q = query(collection(firestore, "articles"));

const App = () => {

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
        <Stack.Screen name="LoginPatient" component={LoginPatient}  />
        <Stack.Screen name="LoginCaregiver" component={LoginCaregiver}  />
        <Stack.Screen name="FirstPage" component={FirstPage}  />
        <Stack.Screen name="FirstPageCaregiver" component={FirstPageCaregiver}  />
        <Stack.Screen name="PuzzleGame" component={MemoryPairGame}  />
        <Stack.Screen name="SOS" component={SOS}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

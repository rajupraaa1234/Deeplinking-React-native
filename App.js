/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import ProfileScreen from './screen/profile';
import NotificationScreen from './screen/Notification';
import branch, { BranchEvent } from 'react-native-branch'




const App = () => {
 
  BranchListner = async () =>{
      branch.subscribe(({ error, params }) => {
        if (error) {
          console.error('Error from Branch: ' + error)
          return
        }
        const type = params.$og_type;
        console.log(`lastParams : ${type}`);
    
      })   
  }
  useEffect(() => {
    BranchListner();
  },[]);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProfileScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

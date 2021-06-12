import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators,} from '@react-navigation/stack';
import Login from './src/screen/Login';
import OtpScreen from './src/screen/OtpScreen';




export const ROUTE_NAME = 
{
  App: 'App',
  LOGIN :'LOGIN',
  OTPSCREEN :'OTPSCREEN'
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name= {ROUTE_NAME.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name= {ROUTE_NAME.OTPSCREEN}
          component={OtpScreen}
          options={{ headerShown: false }}
        />
    
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}

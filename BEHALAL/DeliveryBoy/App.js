import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/router/drawerContent';
import { createStackNavigator, CardStyleInterpolators,} from '@react-navigation/stack';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';


// import SplasScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/Login';
// import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import Icon from 'react-native-vector-icons/Entypo';

export const ROUTE_NAME = 
{
  App: 'App',
  SPLASH: 'SPLASH',
  REGISTER: 'REGISTER',
  HOME :'HOME',
  LOGIN :'LOGIN',
  SCR1 :'SCR1',
  SCR2 :'SCR2'
}
 const homeStack = createStackNavigator();
 const loginStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackSceen =({navigation}) => {
  return(
    <homeStack.Navigator screenOptions={{
         headerStyle :{
        backgroundColor: '#009387'
   },
   headerTintColor :'#fff',
   headerTitleStyle :{
     fontWeight :'bold'
   }
 }}>
   <homeStack.Screen 
    
          name= {ROUTE_NAME.HOME}
          component={HomeScreen}
          options={{
            title :'Overview', 
            headerLeft:() =>(
          <Icon.Button name ='menu' size ={25}
          onPress ={() => navigation.openDrawer()}></Icon.Button>)}}/>
           <homeStack.Screen 
    
    name= {ROUTE_NAME.SCR1}
    component={Screen1}
    options={{
      title :'Overview', 
      headerLeft:() =>(
    <Icon.Button name ='menu' size ={25}
    onPress ={() => navigation.openDrawer()}></Icon.Button>)}}/>

        
     
 </homeStack.Navigator>
  );
}
const LoginStackScreen =({navigation}) => {
  return(
  <loginStack.Navigator screenOptions={{
       headerStyle :{
      backgroundColor: '#009387'
 },
 headerTintColor :'#fff',
 headerTitleStyle :{
   fontWeight :'bold'
 }
}}>
 <loginStack.Screen 
  
        name= {ROUTE_NAME.LOGIN}
        component={LoginScreen}
        options={{
          title :'Overview', 
          headerLeft:() =>(
        <Icon.Button name ='menu' size ={25}
        onPress ={() => navigation.openDrawer()}></Icon.Button>)}}/>
</loginStack.Navigator>
  );
}
function MyStack() {  
  return (
  <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen name={ROUTE_NAME.HOME} component={HomeStackSceen} />
    <Drawer.Screen name={ROUTE_NAME.LOGIN} component={LoginStackScreen} />
  </Drawer.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}

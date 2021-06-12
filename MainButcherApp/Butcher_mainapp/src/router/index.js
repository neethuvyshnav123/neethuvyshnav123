import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators,} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Menuicon from 'react-native-vector-icons/FontAwesome';
import Bellicon from 'react-native-vector-icons/FontAwesome5';
import Doticon from 'react-native-vector-icons/Entypo';
import SplashScreen from '../../src/screens/SplashScreen';
import LoginScreen from '../../src/screens/LoginScreen';
import RegisterScreen from '../../src/screens/RegisterScreen';
import OrderScreen from '../../src/screens/OrderScreen';
import MoreScreen from '../../src/screens/MoreScreen';
import HomeScreen from '../../src/screens/HomeScreen';

export const  ROUTE_NAME ={
    App     :   'App',
    SPLASH  :   'SPLASH',
    LOGIN   :   'LOGIN',
    HOME    :   'HOME',
    REGISTER:   'REGISTER',
    ORDER   :   'ORDER',
    MORE    :   'MORE'
}
const Stack = createStackNavigator();
const Tab =createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        backgroundColor: "transparent",
        position: 'absolute',
                    left: 0,
                    bottom: 0,
                    right: 0,
                    borderTopWidth: 0,
                    elevation: 0,
        activeTintColor: '#FFFFFF',
        activeBackgroundColor:'#0F8044',
        // inactiveBackgroundColor:'#FFFFFF',
        // inactiveTintColor:'#0F8044',
        style:{height:100}
      }}>
        <Tab.Screen
        name={ROUTE_NAME.ORDER}
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({focused}) => (
            <Bellicon focused ={focused} name="concierge-bell" color= { focused ?'#ffff' :'#0F8044'} size={27} />
            
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused}) => (
            <Menuicon name="file-text-o" color= { focused ?'#ffff' :'#0F8044'} size={30} resizeMode="contain" />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.MORE}
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({focused}) => (
            <Doticon name="dots-three-vertical" color= { focused ?'#ffff' :'#0F8044'} size={30} resizeMode="contain" />
          ),
        }}
      />
      </Tab.Navigator>
    );
  }

function MainContainer(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name ={ROUTE_NAME.SPLASH}
            component ={SplashScreen}
            options={
                {headerShown :false}
            }/>
            <Stack.Screen
            name ={ROUTE_NAME.LOGIN}
            component={LoginScreen}
            options ={
                {headerShown:false}}
            />
            <Stack.Screen
            name ={ROUTE_NAME.HOME}
            component={MyTabs}
            options ={
                {headerShown:false}}
            />
            <Stack.Screen
            name ={ROUTE_NAME.REGISTER}
            component={RegisterScreen}
            options ={
                {headerShown:false}}
            />
        </Stack.Navigator>
    )
}
export default function App(){
    return(
        <NavigationContainer>
            <MainContainer />
        </NavigationContainer>
    )
}
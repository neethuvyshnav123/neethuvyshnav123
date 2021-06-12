import React, {Component} from 'react';
import {SafeAreaView, ActivityIndicator, Text} from 'react-native';
import { ROUTE_NAME } from '../../../../App';
// import { ROUTE_NAME } from '../../../../App';
import AsyncStorage from '@react-native-community/async-storage';


import Styles from '../styles';
export default class Splash extends Component{
    // componentDidMount() {
    //     setTimeout(function(){
    //        this.props.navigation.navigate(ROUTE_NAME.LOGIN)
    //     }, 1000);
    // }
    constructor(props){
        super(props);
        this.state= {
          data: 0
        }
      }
      _loggedData = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          this.props.navigation.navigate(value !== '1' ? ROUTE_NAME.LOGIN : ROUTE_NAME.HOME)
        
        } catch (error) {
          // Error retrieving data
        }
      };
    componentDidMount(){
     setTimeout(() => {
            this.props.navigation.navigate(ROUTE_NAME.LOGIN);
          }, 2000);
          this._loggedData();
    }
    render(){
        return(
            <SafeAreaView style= {Styles.Container}>
                <Text onPress= {()=>this.props.navigation.navigate(ROUTE_NAME.LOGIN)}>clickkkk</Text>
                <ActivityIndicator size="small" color="#0000ff" />
            </SafeAreaView>
        )
    }
}
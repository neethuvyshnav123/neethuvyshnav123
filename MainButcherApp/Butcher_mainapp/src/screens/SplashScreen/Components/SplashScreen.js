import React,{Component} from 'react';
import {View,Text, Image} from 'react-native';
import Images from '../../../images/images';
import Styles from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ROUTE_NAME } from '../../../router/index';
export default class SplashScreen extends Component{
    _checkasyncdata = async () => {
        try{
            const value = await AsyncStorage.getItem('token');
            if(value){
                this.props.navigation.navigate(ROUTE_NAME.HOME)
            }
            else{
                this.props.navigation.navigate(ROUTE_NAME.LOGIN)
            }
            console.log('value',value)
        }
        catch (error){

        }
    }
    componentDidMount(){
        setTimeout(() => {
               this.props.navigation.navigate(ROUTE_NAME.LOGIN);
             }, 2000);       
    }
    render(){
        return(
            <View style={Styles.Container}>
                <Image style={Styles.img_Style}
                    source={Images.splash}
                />
            </View>
        )
    }
}
import React, {Component} from 'react';
import {View,Text,TextInput, TouchableHighlight} from 'react-native';
import { ROUTE_NAME } from '../../../../App';
import Styles from '../styles';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: null,
            password: null,
            name_err :null,
            pass_err :null,
            log_data :null
        }
    }
   
 
    
    // login(){
    //     let obj = {  
    //         namee: this.state.name,  
    //         email: this.state.password,  
    //       }  
    //   AsyncStorage.setItem('user',JSON.stringify(obj));  

    // }
    async submit(){
        console.log('name',this.state.name);
        console.log('password',this.state.password);
        if(this.state.name && this.state.password){
            try {
            this.props.navigation.navigate(ROUTE_NAME.HOME)
            await AsyncStorage.setItem('user','1');  
            }
            catch(error){
                alert('There was an error')
            }
} else {
            if(!this.state.name){
                this.setState({name_err :"User name must not be empty"})

            } 
            if(!this.state.password){
                this.setState({pass_err :"Password name must not be empty"})

            }
        }
    }

    updatevalue(text, type){
        type == 'username' ? this.setState({ name: text }) : null
        type == 'password' ? this.setState({ password: text}) : null
    }
    
    render(){
        return(
            <View style={Styles.Container}>
                <TextInput 
                    style= {Styles.textInput} 
                    placeholder="Username" 
                    placeholderTextColor="#003f5c"
                    onChangeText ={(text) => this.updatevalue(text, 'username')}
                />
                <Text style ={{color :'red',fontSize: 30}}>{this.state.name_err}</Text>
                <TextInput  
                    style= {Styles.textInput} 
                    placeholder="Password"
                    secureTextEntry= {true}
                    placeholderTextColor="#003f5c"
                    onChangeText ={(text) => this.updatevalue(text, 'password')}                
                />
                <Text style ={{color :'red',fontSize: 30}}>{this.state.pass_err}</Text>
                <Text
                    style ={{textAlign: 'right',fontSize:30}}>
                    forget Password ?
                    </Text>
                <TouchableHighlight 
                    style= {Styles.btn}
                    onPress ={()=> this.submit()}
                    >
                    <Text style ={{ fontSize: 45}}>Login</Text>
                </TouchableHighlight>
                <Text style={{fontSize :30}} onPress= {()=>this.props.navigation.navigate(ROUTE_NAME.REGISTER)}>Register</Text>
            </View>
        )
    }
};
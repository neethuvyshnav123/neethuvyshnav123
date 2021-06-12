import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import { ROUTE_NAME } from '../../../../App';

import Styles from '../styles';
export default class RegisterScreen extends Component{
    constructor(props) 
    {
        super(props)
        this.state = {
            name : null,
            last_name: null,
            phone_number: null,
            email_address: null,
            name_error: null,
            lastname_err: null,
            phonenumber_err: null,
            email_err: null
                     }
    }
    validate()
    {
        console.log('name',this.state.name);
        console.log('last name',this.state.last_name);
        console.log('last name',this.state.phone_number);
        console.log('last name',this.state.email_address);
        if(this.state.name && this.state.last_name && this.state.phone_number && this.state.email_address)
            {
            this.props.navigation.navigate(ROUTE_NAME.LOGIN)
            } 
        else 
            {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email_address) === true)
            {
                this.setState({email_err :""})

            }
            else {
                this.setState({email_err :"Please enter currect email address"})
               
            }
            if(!this.state.name){
                this.setState({name_error :"First name must not be empty"})

            } 
            
            if(!this.state.last_name){
                this.setState({lastname_err:"Last name must not be empty"})

            } 
            if(!this.state.phone_number){
                this.setState({phonenumber_err: "Phone number must not be empty"})

            } 
                else {
                this.setState({phonenumber_err :"Enter valid phonenumbers"})
                    }   
        }
    }

    updatevalue(text, type)
    {
        type == 'username' ? this.setState({ name: text }) : null
        type == 'password' ? this.setState({ password: text}) : null
    }
    
    updatevalue(text, type)
    {
        type == 'firstname' ? this.setState({ name: text }) : null
        type == 'second' ? this.setState({ last_name: text}) : null
        type == 'phone' ? this.setState({ phone_number: text}) : null
        type == 'email' ? this.setState({ email_address: text}) : null
    }
    render(){
        return(
            <View style={Styles.Container}>
            <TextInput 
                style= {Styles.textInput} 
                placeholder="First Name" 
                placeholderTextColor="#003f5c"
                onChangeText ={(text) => this.updatevalue(text, 'firstname')}
            />
            <View style ={{justifyContent:'space-between'}}>
            <Text style ={{color :'red',textAlign :'right',fontSize: 30}}>{this.state.name_error}</Text>
            </View>
            <TextInput  
                style= {Styles.textInput} 
                placeholder="Last Name" 
                placeholderTextColor="#003f5c"
                onChangeText ={(text) => this.updatevalue(text, 'second')}
            />
            <View style ={{justifyContent:'space-between',alignItems:'flex-end'}}> 
             <Text style ={{color :'red',textAlign: 'right',fontSize: 30}}>{this.state.lastname_err}</Text>
             </View>
            <TextInput  
                style= {Styles.textInput} 
                placeholder="Enter your Email Address" 
                placeholderTextColor="#003f5c"
                keyboardType = "email-address"
                onChangeText ={(text) => this.updatevalue(text, 'email')}
            />
            <View style ={{justifyContent:'space-between',alignItems:'flex-end'}}>
             <Text style ={{color :'red' ,textAlign: 'right' ,fontSize: 30}}>{this.state.email_err}</Text>
             </View>
            <TextInput  
                style= {Styles.textInput} 
                placeholder="Phone Number" 
                placeholderTextColor="#003f5c"
                onChangeText ={(text) => this.updatevalue(text, 'phone')}
            />
            <View style ={{justifyContent:'space-between',alignItems:'flex-end'}}>
             <Text style ={{color :'red',textAlign :'right',fontSize: 30}}>{this.state.phonenumber_err}</Text>
             </View>
            <TouchableHighlight 
                style= {Styles.btn}
                onPress ={() =>this.validate()}>
                <Text style ={{fontSize :40}}>Register</Text>
            </TouchableHighlight>
        </View>
        )
    }
}
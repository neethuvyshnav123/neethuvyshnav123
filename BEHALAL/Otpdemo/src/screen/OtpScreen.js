import React, { Component } from 'react';
import { Text, View ,TextInput} from 'react-native';

export default class OtpScreen extends Component{
    constructor(props){
        super(props);
        this.state ={
            confirmation : null,
            code :null
        }
    }
    componentDidMount(){
        console.log('???????????????????',this.props.route.params.otp)
    }
    async signInWithPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(this.props.route.params.otp);
        // this.setState({confirmation:confirmation});
        console.log("Confirmation",confirmation)
      }
  
      updateValue(text,type){
          type =='otpcode' ? this.setState({code :text}) :null
      }
      
    render(){
        return(
            <View style ={{justifyContent :'center',alignItems :'center'}}>
                <Text >Welcome to the otp Screen</Text>
            
         <TextInput
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="Please enter the OTP"
                keyboardType= {'phone-pad'}
                onChangeText={(text)=>this.updateValue(text,'otpcode')}
                />
            </View>
        )
    }
}
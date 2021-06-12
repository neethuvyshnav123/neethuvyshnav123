import React,{ Component } from 'react';
import {View,Text, TouchableHighlight,StyleSheet ,TextInput} from 'react-native';
import { ROUTE_NAME } from '../../App';
import auth from '@react-native-firebase/auth';
export default class extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneNumber : null,
            confirmation :null
        }
    }
 
    updatevalue(text, type){
        type == 'phone' ? this.setState({ phoneNumber: text }) : null
        
    }
    
    
    _loginUser(){
        console.log("Phone number", this.state.phoneNumber.length)
        if(this.state.phoneNumber && this.state.phoneNumber.length >=10)
        {
            this.signInWithPhoneNumber();
        //     this.props.navigation.navigate(ROUTE_NAME.OTPSCREEN,{otp: this.state.phoneNumber})
         }
        else
        alert('Enter 10 digit Mobile number')
        


    }

    
        async signInWithPhoneNumber() {
            const confirmation = await auth().signInWithPhoneNumber('+91'+this.state.phoneNumber);
            // if(confirmation) {
            //     this.setState({confirmation:confirmation});
            //     this.props.navigation.navigate(ROUTE_NAME.OTPSCREEN)
            // }
            
            console.log("Confirmation",confirmation._auth._app)
            console.log("set",this.state.confirmation)
          }
    

    render(){
        return(
           <View style={styles.container}>
               <View style= {{flexDirection:'row'}}>
                   <Text style ={{fontSize :20,justifyContent :'center',paddingLeft :5, alignItems :'center',paddingTop :10}}>+91</Text>
               <TextInput
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="1234567890"
                keyboardType= {'phone-pad'}
                onChangeText={(text) => this.updatevalue(text ,'phone')}
                />
                </View>
                <TouchableHighlight onPress ={() => this._loginUser()} style={ styles.btnContainer }>
                <Text style={styles.btnText}>Get OTP! </Text>
                </TouchableHighlight>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
        elevation:4
    },
    btnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
  
    text: {
        color: 'black',
        fontSize: 20,
    },
})

import React,{Component} from 'react';
import {View,Text,Image, TextInput,TouchableHighlight, SafeAreaView, ScrollView,Alert} from 'react-native';
import { ROUTE_NAME } from '../../../router/index';
import { connect } from 'react-redux';
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial  from 'react-native-vector-icons/Ionicons';
import Styles from '../style'
import { login_data,remove_login } from '../action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';
class LoginScreen extends  Component{
    constructor(props){
        super(props);
        this.state= {
            email: null,
            password: null,
            email_err :null,     
            pass_err :null,
            log_data :null,
            secure: true,
            updateprop: null
        }
    }
    componentDidMount(){
        console.log('propserror',this.props.error1)
        this.props.dispatch(remove_login())
        
    }
    componentDidUpdate(){
        console.log('propserror',this.props.error1)
    }
    // componentWillUnmount(){
    //     this.props.dispatch(remove_login())
    //     console.log('propserror',this.props.error1)
    // }
  
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("nextProps", nextProps, "\nprevState", prevState)
    //     if(nextProps.error1 !== prevState.error1)
    //       return {error1: nextProps.error1,
    //         updateprop:nextProps.error1};
    //     else
    //       return null;
    //   }
    async _login(){
        if(this.state.email && this.state.password){
            console.log('email',this.state.email)
            console.log('password',this.state.password)
             // {this.props.onFunction(this.state.fname,this.state.last_name,this.state.phone_number,this.state.email_address,this.state.estname)}
            await this.props.dispatch(login_data({email:this.state.email,password:this.state.password}))
            const y = await AsyncStorage.getItem("token"); 
            console.log( '=====token===',y)
            let yw =JSON.stringify(this.props.response1)
            console.log('----------propserrormessage',this.props.errorMessage1) 
            if(this.props.responseall1 !==null && this.props !==undefined){
                    console.log('----------propserror',this.props.error1) 
                    console.log('---------propsresponse',this.props.response1)
            }
           let ydd=this.props.errorMessage1;
           console.log('----------ffffffgg',ydd)
           if(this.props.error1 === false &&  this.props.errorMessage1 === null){
                this.props.navigation.navigate(ROUTE_NAME.HOME) 
            }
        else{
            console.log(this.props.errorMessage1)
            if(this.props.errorMessage1 === "Request failed with status code 401"){
                    Alert.alert("Please check your password")
                }
            else{
                    Alert.alert("Invalid email and password")
                }
            this.textInput.clear()
            this.textInput1.clear()
        }
        } 
        else {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!this.state.email ){
                this.setState({email_err :"Please Enter your email address"})
            } 
            if(this.state.email){
                if(reg.test(this.state.email) === false){
                    this.setState({email_err: "Please enter your valid email address."})
                }
            }
            if(!this.state.password){
                this.setState({pass_err :"Password  must not be empty"})
            }
        }
    }
    async updatevalue(text, type){
        await type == 'emailadd' ? this.setState({ email: text } ,() => {                              
            //callback
            console.log(this.state.email) // myname
          }) : this.setState({email_err :""})
        await  type == 'password' ? this.setState({ password: text}, () => {                              
            //callback
            console.log(this.state.password) // myname
          }) : this.setState({pass_err :""})
    }
    render(){
        return(
            <SafeAreaView style ={Styles.Container}>
                <ScrollView style= {Styles.scroll_viewstyle}>
                    <View style= {Styles.Sub_container}>
                        <View style= {{width: '90%'}}>
                            <Text style ={Styles.MainText}>Welcome!</Text>
                            <Text style ={Styles.LoginText}>Login</Text>
                        </View>
                        <View style= {Styles.maintext_inputview}>
                            <View style ={Styles.actions1}>
                                <TextInput style ={Styles.TextInputText} 
                                    ref={input => { this.textInput = input }}
                                    onChangeText ={(text) => this.updatevalue(text, 'emailadd')}
                                    placeholderTextColor = '#B5B5B5'  
                                    placeholder="Email address">
                                </TextInput>
                                <UserIcon
                                    style ={Styles.iconStyle} 
                                    name ='user-alt' 
                                    color ="#0F8044" 
                                    size ={35}
                                />
                            </View>
                            <View style ={Styles.submaintext_inputview }>
                            {
                                this.state.email_err ? <Text style ={Styles.error_txt}>{this.state.email_err}</Text> : null
                            }
                            <View></View>
                            </View>
                            <View style ={Styles.actions1}>
                                <TextInput 
                                    style ={Styles.TextInputText}
                                    ref={input => { this.textInput1 = input }}
                                    onChangeText ={(text) => this.updatevalue(text, 'password')} 
                                    secureTextEntry= {this.state.secure}
                                    placeholderTextColor = '#B5B5B5'  
                                    placeholder="Password">
                                </TextInput>
                                <IconMaterial 
                                    onPress={() =>true ? this.setState({secure : false }):this.setState({secure : true })}
                                    style ={Styles.iconStyle1} 
                                    name ='md-eye-off' 
                                    color ="#0F8044" 
                                    size ={40}
                                />
                            </View>
                            <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.pass_err ?<Text style ={Styles.error_txt}>{this.state.pass_err}</Text> : null
                            }
                            <View></View>
                            </View>
                            
                            <View style ={Styles.forget_view}>
                                <View></View>
                                <Text style = {Styles.forgotStyle}>Forgot Password ?</Text>
                            </View>
                            <TouchableHighlight style ={Styles.Btn}
                                underlayColor= '#0F8044'
                                onPress={() => this._login()} > 
                                <Text style ={Styles.Btntext}>LOGIN</Text>
                            </TouchableHighlight>
                        </View>
                        <View style ={Styles.bottomContainer}>
                            <Text style = {Styles.orStyle}>Or</Text>
                            <Text style = {Styles.registerStyle}
                                 onPress= {()=>this.props.navigation.navigate(ROUTE_NAME.REGISTER)}>Register
                            </Text>
                        </View>
                    </View>
                </ScrollView>  
            </SafeAreaView>
        )
    }  
}  

function mapStateToProps(state) {
    
    const {response} = state

    console.log('STATE DATA',state)
    return {
        
        errorMessage1 : state.log_datareducer.errorMessage1,
        error1:state.log_datareducer.error1,
        response1: state.log_datareducer.response1 ,
    
    }
  }
export default connect(mapStateToProps, null)(LoginScreen);  

import React ,{Component}from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,ScrollView, SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { add_registerdata,remove_register } from '../action';
import Style from '../style'
class RegisterScreen extends Component{
    constructor(props) 
    {
        super(props)
        this.state = {
            fname : null,
            last_name: null,
            phone_number: null,
            email_address: null,
            name_error: null,
            lastname_err: null,
            phonenumber_err: null,
            email_err: null,
            estname:null,
            estnameerr :null,
            password:null,
            password_error :null
        }
    }
    componentDidMount(){
        console.log('propserror',this.props.error)
        this.props.dispatch(remove_register())
        console.log('propserror',this.props.error)
        console.log('responseprops',this.props.response);
        console.log('propserrormessage',this.props.errorMessage)
    }
    componentDidUpdate(){
        console.log('propserror',this.props.error)
        console.log('responseprops',this.props.response);
        console.log('propserrormessage',this.props.errorMessage)
    }
    submit(){
       this.setState({ _modalState :true })
    }
registerdata_validation(){
    console.log('first name',this.state.fname);
    console.log('last name',this.state.last_name);
    console.log('phone',this.state.phone_number);
    console.log('email',this.state.email_address);
    console.log('est',this.state.estname);
    console.log('----propsresponse',this.props.response);
    console.log('-----propserror',this.state.error);
    console.log('=---propserrormessgg,',this.props.errorMessage)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var letters = /^[A-Za-z]+$/;
    if(!this.state.fname){
        this.setState({name_error : "Please enter your first name."})
    }
    else if(!letters.test(this.state.fname))
    {
        this.setState({name_error : "Name field required only alphabet characters."})
    }
     if(!this.state.last_name)
    {
        this.setState({lastname_err : "Please enter your last name."})
    }
    if(!letters.test(this.state.fname))
    {
        this.setState({lastname_err: "Name field required only alphabet characters."})
    }
     if(!this.state.email_address){
        this.setState({email_err: "Please enter your email address."})
    }
     if(reg.test(this.state.email_address) === false){
        this.setState({email_err: "Please enter your valid email address."})
    }
     if(!this.state.phone_number){
        this.setState({phonenumber_err: "Please enter your Mobile Number."})
    }
    else if(this.state.phone_number){
        if(this.state.phone_number.length ==10){
            this.setState({phonenumber_err: ""})
        }
        else{
            this.setState({phonenumber_err: "Please enter valid Mobile number."})
        }
        
    }
     if(!this.state.estname){
        this.setState({estnameerr: "Please enter Establishment Name."})
    }
    if(!this.state.password){
        this.setState({password_error: "Please enter your Password."})
    }
    else if(this.state.password.length > 12){
        this.setState({password_error: "Password maximum length is 12."})
    }
    else{
        this.setState({name_error : '',lastname_err :'',estnameerr:'',email_err:'',password_error:'',phonenumber_err:''})
        console.log('fname',this.state.fname)
        console.log('lname',this.state.last_name)
        // {this.props.onFunction(this.state.fname,this.state.last_name,this.state.phone_number,this.state.email_address,this.state.estname)}
        this.props.dispatch(add_registerdata({fname:this.state.fname,lname:this.state.last_name,est_name:this.state.estname,phone:this.state.phone_number,email:this.state.email_address,passwd :this.state.password}))
        console.log(this.props.error)
        console.log(this.props.errorMessage)
        if(this.props.errorMessage ===null && this.props.error === true)
            {
                this.props.dispatch(remove_register())
                Alert.alert(
                    "Thank You for registering with us.We will contact you",
                    "",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => this.props.dispatch(remove_register())}
                    ]
                  );
                }
            else
                {
                    Alert.alert(
                        "Already registered email anad phonenumber",
                        "",
                        [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => this.props.dispatch(remove_register())}
                        ]
                    );
                }
            this.props.dispatch(remove_register())
        }
        this.textInput.clear()
        this.textInput1.clear()
        this.textInput2.clear()
        this.textInput3.clear() 
        this.textInput4.clear()
        this.textInput5.clear()
    }   
async updatevalue(text, type){
    await type == 'first_name' ? this.setState({ fname: text,name_error:"" }) : null
    await type == 'last_name' ? this.setState({ last_name: text,lastname_err:""}) : null
    await type == 'email' ? this.setState({ email_address: text,email_err:''}) : null
    await type == 'phone' ? this.setState({phone_number: text,phonenumber_err:""}) : null
    await type == 'es_name' ? this.setState({ estname: text,estnameerr:""}) : null
    await type == 'password' ? this.setState({ password: text,password_error:''}) : null
}
    render(){
        return(
            <SafeAreaView style ={Style.Container}>
                <ScrollView style ={Style.scroll_viewstyle}>
                    <View style={Style.Sub_container}>
                    
                    <View style= {{width: '90%',alignItems: 'center',justifyContent: 'center'}}>
                        <Text style ={Style.RegisterText}>Register</Text>
                        <TextInput 
                            style ={Style.TextinputContainer}
                            onChangeText ={(text) => this.updatevalue(text, 'first_name')}  
                            placeholderTextColor = '#B5B5B5'
                            ref={input => { this.textInput = input }}
                            placeholder="First Name"
                            returnKeyType ="next">
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.name_error ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.name_error}</Text> : null
                            }
                            <View></View>
                         </View>
                        <TextInput 
                            style ={Style.TextinputContainer} 
                            onChangeText ={(text) => this.updatevalue(text, 'last_name')} 
                            placeholderTextColor = '#B5B5B5' 
                            ref={input => { this.textInput1 = input }}
                            placeholder="Last Name">
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.lastname_err ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.lastname_err}</Text> : null
                            }
                            <View></View>
                        </View>
                        <TextInput style ={Style.TextinputContainer}
                            onChangeText ={(text) => this.updatevalue(text, 'email')}  
                            placeholderTextColor = '#B5B5B5'  
                            ref={input => { this.textInput2 = input }}
                            placeholder="Email Address">
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.email_err ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.email_err}</Text> : null
                            }
                            <View></View>
                        </View>
                        <TextInput style ={Style.TextinputContainer} 
                            onChangeText ={(text) => this.updatevalue(text, 'phone')} 
                            placeholderTextColor = '#B5B5B5'  
                            placeholder="Phone Number"
                            ref={input => { this.textInput3 = input }}
                            keyboardType="numeric"
                            >
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.phonenumber_err ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.phonenumber_err}</Text> : null
                            }
                            <View></View>
                        </View>
                        <TextInput style ={Style.TextinputContainer}
                            onChangeText ={(text) => this.updatevalue(text, 'es_name')}  
                            placeholderTextColor = '#B5B5B5' 
                            ref={input => { this.textInput4 = input }} 
                            placeholder="Establishment Name">
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.estnameerr ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.estnameerr}</Text> : null
                            }
                            <View></View>
                            </View>
                            <TextInput style ={Style.TextinputContainer}
                            onChangeText ={(text) => this.updatevalue(text, 'password')} 
                            ref={input => { this.textInput5 = input }} 
                            placeholderTextColor = '#B5B5B5'  
                            placeholder="Password">
                        </TextInput>
                        <View style ={{justifyContent:'space-between',flexDirection:'row',width:'100%'}}>
                            {
                                this.state.password_error ? <Text style ={{color :'red',fontSize: 25 ,marginTop:5}}>{this.state.password_error}</Text> : null
                            }
                            <View></View>
                            </View>
                    </View>
                    <View style={Style.ViewButton}> 
                        <TouchableOpacity style ={Style.Btn} onPress= {()=>this.registerdata_validation()} >
                            <Text style={Style.Btntext}>SUBMIT</Text >
                        </TouchableOpacity> 
                    </View>
                </View> 
            </ScrollView>
        </SafeAreaView>)
    }
}
function mapStateToProps(state) {
    
    const {response} = state

    console.log('STATE DATA',state)
    return {
        
        errorMessage : state.register_datareducer.errorMessage,
        error:state.register_datareducer.error,
        response: state.register_datareducer.response ,
    
    }
  }

export default connect(mapStateToProps, null)(RegisterScreen);


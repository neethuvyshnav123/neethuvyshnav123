import { forHorizontalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from '../../assets/color'

export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.PRIMARY_COLOR,
    },
    scroll_viewstyle :  {
        height: '100%',
        width: '100%'
    },
    maintext_inputview  :   {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submaintext_inputview : {
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%'
    },
    Sub_container :{
        alignItems: 'center',justifyContent: 'center', paddingTop :94,
        paddingBottom:10,
        paddingLeft: 50,
        paddingRight:50,
        backgroundColor: color.PRIMARY_COLOR,
    },
    MainTextContainer: {
        height : 60,   
    },
    MainText:{
         fontWeight : 'bold',
         alignItems:'flex-end',
         fontSize: 76,
         color: color.SECONDARY_COLOR
    },
    LoginText :{
       fontSize :56,
       color: color.SECONDARY_COLOR,
       marginTop: 60,
       marginBottom: 30
    },
    orStyle:{
        marginTop:10,
        color :color.SECONDARY_COLOR,
        fontSize: 24,
        marginBottom:10
    },
    registerStyle :{
        color : color.color_accent,
        fontSize: 33,
    },
    iconStyle:{
        paddingBottom: 20,
        paddingTop :25,
        paddingRight:40
    },
    iconStyle1:{
        paddingBottom: 20,
        paddingTop :22,
        paddingRight:40
    },
    forgotStyle :{
        paddingTop :8,
        fontSize :28,
        color : color.SECONDARY_COLOR,
        textAlign:'right'
    },
    bottomContainer:{
        marginTop :10,
        justifyContent:'center',
        alignItems :'center',
        marginBottom:10
    },
    ContentText :{
        textAlign :'left',
        fontSize:hp('3%'),
    },
    TextContainer :{
        padding:10,
       marginBottom:hp('10%'),
       paddingLeft:hp('6%'),
       paddingRight:hp('6%')
      },
    PhoneText :{
        textAlign : 'left',
        fontSize: hp('3%'),
        color :'#999999',
    },
    TextInputContainer:{
        marginTop:hp('8%'),
        borderBottomColor :'#999999',
        borderBottomWidth :2,
        flexDirection:'row',
        marginBottom :15,
        justifyContent:'flex-start'
    },
    CountryCode:{
        fontSize:hp('4%'),
        color :'#999999',
        paddingTop:5,
        paddingLeft:20
    },
    ImageS:{
        height :hp('5%'),
        width:wp('7%'),
        borderRadius : 10,
        paddingLeft:10,
        marginTop :17
            },
    TextInputText:{
         fontSize:23,
        color :'#141414',
        height: 85,
        paddingLeft: 40,
    },
    actions1 :{
        marginTop: 50,
        width : '100%',
        flexDirection :'row',
        height :86,
        backgroundColor: color.SECONDARY_TEXT_COLOR,
        elevation: 4,
        justifyContent :'space-between'
    },
    error_txt : {
        color :'red',
        fontSize: 25 ,
        marginTop:5
    },
    forget_view :   {
        justifyContent:'space-between',
        flexDirection:'row',
        width:'100%'
    } ,
    ErrorText:{
        color:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    Btntext :{
        fontSize:36,
        fontWeight :'bold',
        justifyContent :'center',
        alignItems:'center',
        color :'#FFFFFF'
    },
    ViewButton :{
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
Btn :{
    height : 120,
    width: '90%',
    marginTop : 70,
    backgroundColor :'#569346',
    justifyContent :'center',
    alignItems:'center',
    elevation :4,
    borderRadius :20,
    
}

})
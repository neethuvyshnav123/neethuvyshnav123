import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from '../../assets/color';
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
    Sub_container :{
        alignItems: 'center',justifyContent: 'center', paddingTop :20,
        paddingBottom:20,
        paddingLeft: 50,
        paddingRight:50,
        backgroundColor: color.PRIMARY_COLOR,
    },
    MainContainer: {
        flex: 1,
        paddingTop :10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.PRIMARY_COLOR,
        paddingLeft :70
    },
    TextinputContainer: {
        height: 100,
        width:' 100%',
        fontSize:28,
        paddingLeft :40,
        fontSize:28,
        color :'#141414',
        height: 85,
        backgroundColor :color.SECONDARY_TEXT_COLOR,
        marginTop:30,
        marginBottom :10,
        elevation :3
    },
    RegisterText :{
        fontSize :60,
        color: color.SECONDARY_COLOR,
        marginTop: 60,
        marginBottom: 30
     },
    Btntext :{
        fontSize:35,
        fontWeight :'bold',
        justifyContent :'center',
        alignItems:'center',
        color : color.SECONDARY_TEXT_COLOR,
        padding:10
    },
    ViewButton :{
        width:'90%',
        marginTop:60,
        justifyContent:'center',
        alignItems:'center'
    },
Btn :{
    paddingLeft:2,
    paddingRight:2,
    height : 110,
    width :'90%',
    backgroundColor :'#569346',
    justifyContent :'center',
    alignItems:'center',
    elevation :4,
    borderRadius :15,
    }
})
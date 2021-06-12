import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from '../../assets/color';

export default StyleSheet.create({
    MainContainer: {
        alignItems: 'center',
        width :'100%',
        backgroundColor: '#fff',
        height: '100%',
        paddingTop:50,
    },
    TextinputContainer: {
        width:' 100%',
        fontSize:28,
        paddingLeft :40,
        fontSize:28,
        color :'#141414',
        height: 85,
        backgroundColor :'#ffff',
        marginBottom :10,
        elevation :3
    },
    touchable_style:{
        marginTop :40,
        height : 90,
        borderWidth :1.5,
        borderColor :color.color_accent,
        borderRadius :15,
        minWidth :190,
        justifyContent :'center',
        alignItems:'center'
    },
    btn_txtstyle:{
        color :color.SECONDARY_TEXT_COLOR,
        fontSize:35,
        fontWeight :'bold',
    },
    text_style :{
        fontSize :25,
        padding :20,
        borderRadius :15,
        color :color.color_accent
    },
    text1_style:{
        fontSize :30,
        padding :10,
        borderRadius :15,
        color :color.color_accent ,
        fontWeight :'bold'
    },
    secondary_container:{
        borderWidth :1,
        borderColor :color.primary_grey,
        height :'73%',
        borderWidth :5,
        marginLeft:40,
        marginRight:40,
        marginTop:30,
    },
    inner_container:{
        height :'65%',
        marginBottom: 50,
        marginLeft :40,
        marginRight :40,
        borderColor :color.primary_shadow_color,
        elevation:4,
        backgroundColor :color.SECONDARY_TEXT_COLOR,
        borderRadius:15,
        borderWidth:1,
    },
    touch_style:{
        backgroundColor :color.color_mlight_green,
        height:100,
        width :270 ,
        borderRadius :15,
        justifyContent :'center',
        alignItems:'center',
        marginTop :35,
        marginBottom:30,
        margin :5

    },
    subcontainer1:{
        width:'60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subContainer:{
        width : '40%',
        justifyContent:'center',
        alignItems: 'center'
    },
    Btntext :{
        fontSize:35,
        fontWeight :'bold',
        justifyContent :'center',
        alignItems:'center',
        color :'#FFFFFF',
        padding:10
    },
    center_container : {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop :250
    },
    ViewButtonHolder :{
        width:'90%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection :'row',
        marginTop: 30
    },
    text_inputstyle: {
        backgroundColor: '#0F8044',
        borderRadius :45,
        width : '45%',
        height: 90,
        color:'#ffff',
        justifyContent: 'center',
        alignItems:'center'
    },
    text_inputstyle1: {
        backgroundColor: '#ffff',
        borderRadius :45,
        width : '45%',
        color:'#0F8044',
        height: 90,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth : 1,
        borderColor :'#CFCFCF'
    },
    itemText: {
        color: '#40394A',
        fontSize: 40
    },
    add_item_text: {
        marginTop: 70,
        color : '#0F8044',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom:20
    },
    search_text:{
        fontSize:25,
    },
    text_inputstyletext: {
        color: color.SECONDARY_TEXT_COLOR,
        fontSize: 25,
        alignItems : 'center',
        justifyContent:'center',
        padding :25,
        fontWeight: 'bold'
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
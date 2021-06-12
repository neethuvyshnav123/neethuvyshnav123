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
    
    },
    listItem: {
        flexDirection: 'row',
        marginTop: 5,
    },

    SelectedlistItem: {
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor:"grey",
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
        backgroundColor: color.SECONDARY_TEXT_COLOR,
        borderRadius :45,
        width : '45%',
        height: 90,
        color:'#ffff',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth :1.5
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
        color:'#CFCFCF',
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
    },
    MainContainerq: {
        justifyContent :'center',
        alignItems: 'center',
        width :'100%',
        height: '100%',
        flex :1,
        backgroundColor: color.SECONDARY_TEXT_COLOR,
        paddingTop :50
    },
    main_textq : {
       fontSize :40,
       color :color.color_accent,
       fontWeight :'bold'
    },
    TextinputContainerq: {
        paddingLeft:40,
        width:'90%',
        height: 50,
        fontSize:28,
        color :'#141414',
        height: 85,
        backgroundColor :color.SECONDARY_TEXT_COLOR,
        marginTop:15,
        marginBottom :10,
        elevation :3
    },
    veg_radview:{
        width :'20%',
        paddingLeft:20,
        paddingRight:20,
        height: 50,
        fontSize:28,
        color :'#141414',
        height: 85,
        backgroundColor :color.SECONDARY_TEXT_COLOR,
        marginTop:15,
        marginBottom :10,
        elevation :3,
        justifyContent:'center'

    },
    touch_style :{

    },
    
    TextinputContainer1q: {
        paddingLeft:40,
        marginTop:40,
        marginBottom:10,
        width:'90%',
        fontSize:28,
        color :'#141414',
        elevation :3,
        backgroundColor :color.SECONDARY_TEXT_COLOR,    
        height :150
    },
})
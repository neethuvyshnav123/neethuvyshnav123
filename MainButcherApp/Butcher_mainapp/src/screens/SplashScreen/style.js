import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import color from '../../assets/color'

export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.PRIMARY_TEXT_COLOR,
        padding:wp('20%')
    },
    img_Style: {
        height: hp('45%'),
        width: wp('60%'),
        resizeMode: 'stretch'
    }
})
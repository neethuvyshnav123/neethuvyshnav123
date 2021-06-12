import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: hp('10%'),
        width: wp('80%') ,
        borderColor: 'gray', 
        borderWidth: 2,
        backgroundColor :'#FFCCCC',
        marginTop :10,
        borderRadius :10,
        fontSize: 30,
        paddingLeft :20
        
    },
    btn: {
        marginTop : 15,
        height: hp('10%'),
        width: wp('80%') ,
        justifyContent: 'center',
        alignItems: 'center' ,
        backgroundColor: '#660066',
        elevation :4,
        borderRadius :10
    ,
   
  }
})
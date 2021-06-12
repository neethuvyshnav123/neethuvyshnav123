import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#969696'
    },
    textInput: {
        height: 100,
        width : '90%',
        borderColor: 'gray', 
        borderWidth: .5,
        backgroundColor :'#FFCCCC',
        marginTop :10,
        borderRadius :10,
        paddingLeft :20,
        fontSize: 30
        
        
    },
    btn: {
        marginTop : 15,
        height:100,
        width :'50%',
        justifyContent: 'center',
        alignItems: 'center' ,
        backgroundColor: '#660066',
        elevation :4,
        borderRadius :10,
   
  }
})
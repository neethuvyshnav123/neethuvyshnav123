import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'
export function login_data(body)   
{   
    const formData = new FormData();
    formData.append('email', body.email);
    formData.append('password', body.password);
    const json11 = JSON.stringify(formData);
    console.log('json' ,formData)
    return  async function (dispatch) {
    console.log('ddddform' ,json11)
    const resp =   await axios({
        method: 'post',
        url: 'https://behalal.techanise.com/index.php/api/v1/butcher/login' ,
        data :formData,
        headers:{
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                },
            })
            .then(async (response) => {
                if(response.data.data.token!==null && response.data.data!==undefined){
                // console.log('===RESPONSE ===',response)
                    await dispatch({type:"lOGIN_DATA_SUCCESS",response1: JSON.stringify(response.data.message),errorMessage1: null})
                    //   console.log('RESPONSE---------',JSON.stringify(response.data.message) 
                    //   ) 
                }
            await AsyncStorage.setItem("token",response.data.data.token);
            // dispatch({type:"lOGIN_DATA_SUCCESS",response: response.data.data})
    }).catch((error) => 
    {
        if(error.message){
            let y= error.message.toString()
            dispatch({type:"LOGIN_FAILED",errorMessage1: error.message});
            console.log('error', JSON.stringify(error));
        }
    }
);





}


}
export function remove_login(){
    return function (dispatch) {
        dispatch({type:"REMOVE_SELECT"})
    }
}
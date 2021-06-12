
import axios from 'axios';
export function add_registerdata(body)   
   {   
      const formData = new FormData();
      formData.append('first_name', body.fname);
      formData.append('last_name', body.lname);
      formData.append('establishment_name', body.est_name);
      formData.append('phone', body.phone);
      formData.append('email', body.email);
      formData.append('user_id', 1);
      formData.append('password', body.passwd);
      const json = JSON.stringify(formData);
      console.log('json' ,json)
   return async function (dispatch) {
      console.log('ddddform' ,formData)
      const resp =await axios({
         method: 'post',
         url: 'https://behalal.techanise.com/index.php/api/v1/butcher/register',
         data :formData,
         headers: { "Content-Type": 'multipart/form-data',
                     "Accept": 'application/json'
                  },
         })
         .then(async (response) => {
         console.log('Response',response)
         if(response.data.data.token!==null && response.data.data!==undefined){
            await dispatch({type: 'ADD_REGISTERDATA', response: JSON.stringify(response.data.message),errorMessage: null})
         }
      }).catch(async error => { 
         if(error.message){
         await dispatch({type :"REGISTER_FAILED",errorMessage: error.message})
      }
    console.log('error', JSON.stringify(error));
   });
}
}
export function remove_register(){
    return function (dispatch) {
        dispatch({type:"REMOVE_SELECT"})
    }
}
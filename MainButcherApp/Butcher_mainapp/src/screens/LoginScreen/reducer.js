let initialState = {
    response1: null,
    error1: true,
    isLoading1: false,
    errorMessage1: null,
      formSubmitted1: false,
      message1:null,
      Error1 :null
 
}

function log_datareducer  (state = initialState, action)  {
    switch (action.type) {
        case "LOGIN_FETCHING":
            return { ...state, isLoading1: true, response1: null}
          
        case "lOGIN_DATA_SUCCESS":
            return { ...state, isLoading1: false, error1: false, response1: action.response1,errorMessage1:action.errorMessage1}
            
        case "LOGIN_FAILED":
            return { ...state, isLoading1: false, error1: true, response1: null,err1: action.err1 ,errorMessage1:action.errorMessage1}
            
        case "LOGIN_RESET":
            return { ...state, isLoading1: false, response1: null, errorMessage1: null, err1: null }
        case "REMOVE_SELECT":
            {
            return{...state,...initialState}
        }
           
        default:
            return {...state}
    }
}
export default log_datareducer 


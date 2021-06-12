let initialState = {
    response: null,
    error: true,
    isLoading: false,
    errorMessage: null,
    formSubmitted: false
}
const register_datareducer = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER_DATA_FETCHING":
            return { ...state, isLoading: true, response: null}
            break;
            case "ADD_REGISTERDATA":
            return { ...state, isLoading: false, error: false, response: action.response,errorMessage:action.errorMessage}
        case "REGISTER_FAILED":
            return { ...state, isLoading: false, error: true, response: null,errorMessage: action.errorMessage }
            break;
        case "REGISTER_DATA_RESET":
            return { ...state, isLoading: false, response: null, error: false, errorMessage: null, err: null }
            break;
            case "REMOVE_SELECT":
            {
            return{...initialState}
            break;
        }
        default:
            return {...initialState}
    }
}

export default register_datareducer


import { SIGN_UP_ERROR,  LOGIN_SUCCESS, LOGIN_ERROR, SIGN_UP_SUCCESS,  SIGN_OUT_SUCCESS } from '../actions/types';
const initialState = {
    isLoggedIn: false,
    authError:null
}
const authReducer = (state=initialState,action) => {
  switch (action.type) {
      case LOGIN_SUCCESS : return {
        ...state, authError: null
      }
      case LOGIN_ERROR: return {
          ...state, authError: "Login Failed"
    }
    case SIGN_OUT_SUCCESS: 
    console.log('signed out succesfully');
    return {
      ...state
     
    }
  
    case SIGN_UP_SUCCESS: 
      console.log("sign up successfully") 
      return {
        ...state, authError: null
      }
  
    
    case SIGN_UP_ERROR: 
    console.log("sign up error")
    return {
      ...state, authError: action.err.message
    }
  
      default: return state
          
  }
}

export default authReducer

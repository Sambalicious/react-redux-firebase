

import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../actions/types';
const initialState = {
    isLoggedIn: false
}
const authReducer = (state=initialState,action) => {
  switch (action.type) {
      case SIGN_IN: return {

      }
      case SIGN_OUT: return {

    }
    case SIGN_UP: return {

    }
  
      default: return state
          
  }
}

export default authReducer

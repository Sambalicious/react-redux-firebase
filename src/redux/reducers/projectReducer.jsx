import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/types";


const initialState ={
    isloading: true,
    error: ""
}

const projectReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT: 
        console.log('created project', action.payload)
        break;
        case CREATE_PROJECT_ERROR: 
        console.log('created project error', action.payload)
        return {...state, error: action.payload}
        
                
        default: return state
    }
}

export default projectReducer

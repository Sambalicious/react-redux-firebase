import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/types";


const initialState ={
    projects: [
        {id: '1', title: 'i love you' ,content: 'hello are you there?'},
        {id: '2', title: 'i hate soyabeans' , content: 'what is your favourite food?'},
        {id: '3', title: 'i admire Tonu Elumemu', content: 'Hardwork pays. i will tell you a story later'}
    ]
}

const projectReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT: 
        console.log('created project', action.payload)

        case CREATE_PROJECT_ERROR: 
        console.log('created project error', action.payload)
        
        
                
        default: return state
    }
}

export default projectReducer

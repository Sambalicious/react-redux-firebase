import { CREATE_PROJECT} from "./types"







export const createProject = (project,firestore) => {
    return (dispatch, getState) => {
        const profile = getState().firebase.profile;

        const authorId = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project, 
            authorFirstname: profile.firstName,
            authorLastname: profile.lastName,
            createdAt: new Date(),
            authorId
        }).then(()=>{
            dispatch({type: CREATE_PROJECT, payload: project})
        }).catch(err=>{
            dispatch({type: "CREATE_PROJECT_ERROR", payload: err})
        })
        
        
        
    }
}


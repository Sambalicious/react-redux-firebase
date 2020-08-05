import { CREATE_PROJECT} from "./types"







export const createProject = (project,firestore) => {
    return (dispatch) => {
        firestore.collection('projects').add({
            ...project, 
            authorFirstname: 'samuel',
            authorLastname: 'Ninja',
            createdAt: new Date(),
            authorId: 2
        }).then(()=>{
            dispatch({type: CREATE_PROJECT, payload: project})
        }).catch(err=>{
            dispatch({type: "CREATE_PROJECT_ERROR", payload: err})
        })
        
        
        
    }
}


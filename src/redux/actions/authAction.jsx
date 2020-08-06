
import { SIGN_OUT_SUCCESS, SIGN_OUT_ERROR, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "./types"


export const signIn = (data, firebase) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((response)=> {
            console.log(response)
            dispatch({type: "LOGIN_SUCCESS" })
        }).catch((err)=>{
            dispatch({type: "LOGIN_ERROR", err})
        })
    }
}

export const signOut = (firebase) => {
    return (dispatch) =>{
        firebase.auth().signOut()
        .then(()=> dispatch({type: SIGN_OUT_SUCCESS}))

    }
}

export const signUp = (firebase,firestore, data) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((response)=> {
            console.log(response);
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: data.firstName,
                lastName: data.lastName,
                initial: data.firstName[0] + data.lastName[0]
               
            })
            }).then(()=>{
                dispatch({type: SIGN_UP_SUCCESS})
            }).catch(err =>{
                dispatch( {type: SIGN_UP_ERROR, err})
            })
            
    }
}

import { SIGN_OUT_SUCCESS, SIGN_OUT_ERROR } from "./types"


export const signIn = (email, password, firebase) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
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
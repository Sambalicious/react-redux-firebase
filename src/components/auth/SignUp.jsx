import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useFirestore } from "react-redux-firebase";
import { useFirebase } from 'react-redux-firebase';
import { signUp } from '../../redux/actions/authAction';

const SignUp = () => {


    const firebase = useFirebase();
    const firestore = useFirestore();
    const dispatch = useDispatch();
   const auth =  useSelector(state=> state.firebase.auth)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    

    const data = {
        email, password, firstName, lastName
    }

    const { handleEmail, handlePassword, handleFirstName, handleLastName } = newFunction(setEmail, setPassword, setFirstName, setLastName);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        
        dispatch(signUp(firebase, firestore, data));
    }
    if(auth.uid) return <Redirect to="/" />
    
    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={handleEmail} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={handlePassword} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
function newFunction(setEmail, setPassword, setFirstName, setLastName) {
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value);
    }
    return { handleEmail, handlePassword, handleFirstName, handleLastName };
}


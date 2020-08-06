import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authAction';
import { useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const SignIn = () => {
   const dispatch = useDispatch();
   const firebase = useFirebase();

const error = useSelector(state => state.auth.authError)
const auth = useSelector(state => state.firebase.auth)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = {
        email, password
    }
    const { handleEmail, handlePassword } = newFunction(setEmail, setPassword);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
       dispatch(signIn(data, firebase));
    }
    if(auth.uid) return <Redirect to="/" />
    
    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={handleEmail} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" value={password} onChange={handlePassword} />
                </div>
                <div className="input-field">
                    <button className="btn pink-lighten-1 z-depth-0">Login</button>
                </div>
                <div className="red-text center">
                    {
                        error ? <p>{error} </p> : null
                    }
                </div>
            </form>
        </div>
    )
}

export default SignIn
function newFunction(setEmail, setPassword) {
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    return { handleEmail, handlePassword };
}


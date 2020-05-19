import React, { useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { handleEmail, handlePassword } = newFunction(setEmail, setPassword);

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(email, password)
    }
    
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


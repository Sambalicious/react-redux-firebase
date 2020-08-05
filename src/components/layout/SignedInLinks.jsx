import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/authAction';
import { useFirebase } from 'react-redux-firebase';

const SignedInLinks = () => {
    const firebase = useFirebase();
    const dispatch = useDispatch();
    
    return (   
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={()=>dispatch(signOut(firebase))}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>SA</NavLink></li>
        </ul>
      );
}
 
export default SignedInLinks;
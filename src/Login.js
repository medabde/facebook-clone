import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const guestPhotoURL = "https://img.icons8.com/fluent-systems-filled/96/000000/guest-male.png"
    const signIn = ()=>{
        // sign in
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch(error => alert(error.message))
    }

    const signInAsGuest = ()=>{
        dispatch({
            type: actionTypes.SET_USER,
            user: {displayName:"Guest",
            photoURL:guestPhotoURL},
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
            </div>
            <Button className="signin" type="submit" onClick={signIn}>
                Sign In With Google
            </Button>
            <Button className="guest" type="submit" onClick={signInAsGuest}>
                Sign In as a guest
            </Button>
        </div>
    )
}

export default Login

import React from "react"
import './login.css'
import {auth ,provider} from '../firebase';
import {signInWithPopup} from 'firebase/auth';

const Login = ({setAuth,IsAuth})=>{

    const signInWithGoogle = ()=>{
        signInWithPopup(auth,provider).then(result=>{
            localStorage.setItem("setAuth",true);
            setAuth(true);
        })
    }
    console.log(IsAuth)
    return(
        <div className="login">
            <button 
            type="button" 
            class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}
export default Login
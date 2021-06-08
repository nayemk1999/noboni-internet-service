import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../../Style/FormStyle/FormStyle.css'
import wave from '../../image/wave.png';
import bg from '../../image/bg.svg';
import avatar from '../../image/avatar.svg';
import firebase from "firebase/app";
import "firebase/auth";
import ModalPopup from '../Modal/Modal';
import { firebaseConfig } from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signupForm = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('SuccessFully Create Account')
                history.push('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    const handleFocus = (e) => {
        let parent = e.target.parentNode.parentNode;
        parent.classList.add('focus')
    }
    const handleBlur = (e) => {
        let value = e.target.value;
        let parent = e.target.parentNode.parentNode;
        if (value == "") {
            parent.classList.remove('focus')
        }
    }

    return (
        <div>
            <img class="wave" src={wave} alt="" />
            <div class="login-container-body">
                <div class="img">
                    <img src={bg} alt="" />
                </div>
                <div class="login-container">
                    <div className="form">
                        <img class="avatar" src={avatar} alt="" />
                        <h2>Welcome</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Full Name</h5>
                                <input onBlur={handleBlur} onFocus={handleFocus} class="input" type="text" />
                            </div>
                        </div>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="email" />
                            </div>
                        </div>
                        <div class="input-div two">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input onChange={(e) => setPassword(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} class="input" type="password" />
                            </div>
                        </div>
                        <div class='login-a'>
                            <Link className="a" to="/login">Login</Link>
                        </div>
                        <input onClick={signupForm} type="submit" class="login-btn" value="Sign Up" />
                        {/* <ModalPopup/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
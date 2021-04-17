import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../../firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import Logo from '../../../image/logo.png'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLoginBtn = () => {
        const gProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(gProvider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, email, errorMessage);
            });
    }
    return (
        <div className='container mt-5'>
            <div class="card text-center">
                <div class="card-header login">
                    <img style={{ width: '200px'}} className='img-fluid' src={Logo} alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title mb-4">Login With Google</h5>
                    <button style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0" onClick={handleLoginBtn}>Continue With Google</button>
                </div>
                <div class="card-footer">
                    Don't have an account? <a href="#">Create an Account</a>
                </div>
            </div>
            {/* <div className="m-auto">
                <h1>Log in Page....</h1>
                <button style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0" onClick={handleLoginBtn}>Continue With Google</button>
            </div> */}
        </div>
    );
};

export default Login;
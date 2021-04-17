import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import Logo from '../../../../image/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <img style={{ width: '200px' }} class="navbar-brand" src={Logo} alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-lg-0 p-1 ">
                    <li class="nav-item active">
                        <Link class="nav-link mr-4 nav-bar" to="/">Home </Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link mr-4 nav-bar" to="/about">About</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link mr-4 nav-bar" to="/dashboard">Dashboard</Link>
                    </li>

                    <li class="nav-item active">
                        <Link class="nav-link mr-4 nav-bar" to="/contact">Contact</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link mr-4 nav-bar" to="/dashboard/admin">Admin</Link>
                    </li>
                    {
                        loggedInUser.email ? <Link className="log-link" to='/dashboard'>{loggedInUser.displayName}</Link>
                            : <Link className="log-link" to='/login'>Login</Link>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import Banner from '../../Banner/Banner';
import './Header.css'
import NavBar from '../NavBar/Navbar'

const Header = () => {
    return (
        <div className='header-container'>
            <NavBar />
            <Banner />
        </div>
    );
};

export default Header;
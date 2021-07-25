import React from 'react';
import Banner from '../../Banner/Banner';
import NavBar from '../../Header/Navbar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavBar />
            <Banner />
        </div>
    );
};

export default Header;
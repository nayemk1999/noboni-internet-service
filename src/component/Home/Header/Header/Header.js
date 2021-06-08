import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMenu from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className=' header-container'>
            <NavbarMenu/>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
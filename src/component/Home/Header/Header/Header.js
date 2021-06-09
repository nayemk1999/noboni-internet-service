import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarMenu from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='container '>
                <NavbarMenu />
                <HeaderMain></HeaderMain>
            </div>
            {/* <HeaderCarousel/> */}
        </div>
    );
};

export default Header;
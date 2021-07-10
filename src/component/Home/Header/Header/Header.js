import React from 'react';
import Banner from '../../Banner/Banner';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavBar/>
            {/* <HeaderMain></HeaderMain> */}
            <Banner />
        </div>
    );
};

export default Header;
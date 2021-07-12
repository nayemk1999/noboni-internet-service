import React from 'react';
import Banner from '../../Banner/Banner';
import NavBar from '../Navbar/Navbar';

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
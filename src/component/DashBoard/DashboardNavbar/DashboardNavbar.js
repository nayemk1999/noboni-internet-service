import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../image/logo.png'

const DashboardNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <section className="dashBoardNav">
            <Navbar className='container' expand="lg sm">
                <Navbar.Brand className=' text-center' >
                    <Link to='/'><img className="img-fluid" src={Logo} alt="" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle className='ml-auto' style={{ border: '1px solid black' }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='text-center ' id="basic-navbar-nav">
                    <Nav className="ml-auto align-items-center">
                        <Nav.Link>
                            <Link className='header-menu p-1' to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='header-menu p-1' to="/about">About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='header-menu p-1' to="/dashboard">Dashboard</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='header-menu p-1' to="/contact-us">Contact US</Link>
                        </Nav.Link>
                        <Nav.Link>
                            {
                                loggedInUser.email ? <Link to='/dashboard'><Avatar src={loggedInUser?.photoURL}></Avatar></Link>
                                    : <Link to='/login'><Avatar src={loggedInUser?.photoURL}></Avatar></Link>
                            }                       
                        </Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>

    );
};

export default DashboardNavbar;
import React from 'react';
import FooterCol from './FooterCol';
// import log from '../../../image/log.png'
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ourOffice = [
    { name: "Dhaka, Bangladesh", link: "//google.com/map" },

]
const quickLink = [
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Our Plan", link: "/ourPlan" },
    { name: "Contact", link: "/contact" },
]
const usefulLink = [
    { name: "Privacy Policy", link: "/privacyPolicy" },
    { name: "Terms & Conditions", link: "/termsCondition" },
    { name: "Support", link: "/support" },
]
const newsLetter = [
    { description: 'Lorem ipsu tempor incididunt ore pretium sollicitudin fermentum.' }
]

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#252433' }} className='p-2'>
            <div className='container mt-5' >
                <div className='row'>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourOffice} >
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3">
                            <h6>Call now</h6>
                            <button style={{ backgroundColor: '#C91729' }} className="btn text-white">+880123465678</button>
                        </div>
                    </FooterCol>
                    <FooterCol key={2} menuTitle="Quick Link" menuItems={quickLink} />
                    <FooterCol key={3} menuTitle="Useful Link" menuItems={usefulLink} />
                    <FooterCol key={1} menuTitle={"News Letter"} menuItems={newsLetter} >
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2 mb-1" type="search" placeholder="Search" aria-label="Search" />
                            <button style={{ backgroundColor: '#C91729' }} class="btn my-2 my-sm-0 text-white" type="submit">Search</button>
                        </form>
                    </FooterCol>


                </div>
                <div className=" text-center pt-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;
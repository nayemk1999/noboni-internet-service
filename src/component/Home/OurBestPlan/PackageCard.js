import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ packageCard }) => {
    const { name, imgURL, description, price, _id } = packageCard

    return (
        <div class="col-sm-6 col-md-4 text-center">
            <div class="card">
                <img style={{ width: '200px', height: '150px' }} className='img-fluid p-2 m-auto' src={imgURL} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div className="icon mt-2">
                        <p><FontAwesomeIcon className='text-brand' icon={faCheckCircle} /> Home Broadband</p>
                        <p><FontAwesomeIcon className='text-brand' icon={faCheckCircle} /> Cell Phone Connection</p>
                        <p><FontAwesomeIcon className='text-brand' icon={faCheckCircle} /> Home Security</p>
                        <p><FontAwesomeIcon className='text-brand' icon={faCheckCircle} /> 99% Internet Uptime</p>
                    </div>
                    <h4>$ {price}/month</h4>
                    <Link style={{ backgroundColor: '#C91729' }} to={"/user/book/" + _id} className="text-white btn my-2 my-sm-0 me-md-2 link-btn"><i class="fa fa-shopping-cart"
                        aria-hidden="true"></i>Purchase Now</Link>
                </div>
            </div>
        </div>

    );
};

export default PackageCard;

// <div className='col-md-4 text-center'>
//     <img className='img-fluid' src={imgURL} alt="" />
//     <p>Icon</p>
//     <h4>{name}</h4>
//     {/* <p>{description}Description</p> */}
//     <ul>
//         <li>Home Broadband</li>
//         <li>Cell Phone Connection</li>
//         <li>Home Security</li>
//         <li>99% Internet Uptime</li>
//     </ul>
//     <h3>$ {price}/month</h3>
//     <Link style={{ backgroundColor: '#C91729' }} to={"/user/book/" + _id} className="text-white btn my-2 my-sm-0 me-md-2"><i class="fa fa-shopping-cart"
//         aria-hidden="true"></i>Purchase Now</Link>
// </div>
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../OurPackages/ProgressBar'
import './Package.css';

const PackageCard = ({ packageCard }) => {
    const { name, imgURL, description, price, _id } = packageCard;

    return (
        <div class="col-sm-6 col-md-4 text-center">
            <div class="card package-container">
                {/* <img style={{ width: '200px', height: '150px' }} className='img-fluid p-2 m-auto' src={imgURL} alt="" /> */}
                <ProgressBar></ProgressBar>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div className=" mt-2">
                            <div className="icon-container">
                                <FontAwesomeIcon className='text-brand' icon={faCheckCircle} />
                                <FontAwesomeIcon className='text-brand' icon={faCheckCircle} />
                                <FontAwesomeIcon className='text-brand' icon={faCheckCircle} />
                                <FontAwesomeIcon className='text-brand' icon={faCheckCircle} />
                            </div>
                            <div className="content-container">
                                <p>Home Broadband</p>
                                <p>Cell Phone Connection</p>
                                <p>Home Security</p>
                                <p>99% Internet Uptime</p>
                            </div>
                    </div>
                    <h4>$ {price}/month</h4>
                    <Link style={{ backgroundColor: '#C91729' }} to={"/user/book/" + _id} className="text-white btn my-2 my-sm-0 me-md-2 link-btn"><i class="fa fa-shopping-cart"
                        aria-hidden="true"></i> Purchase Now</Link>
                </div>
            </div>
        </div>

    );
};

export default PackageCard;
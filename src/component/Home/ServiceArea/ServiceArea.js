import React from 'react';

const ServiceArea = () => {
    return (
        <div style={{ backgroundColor: '#252433', height:'300px' }} className='d-flex align-items-center'>
            <div className="container mt-5 mb-5">
                <div className="row ">
                    <div className="col-md-6">
                        <h4 className='text-brand'>Let's Use Our Service</h4>
                        <h3 className='text-white'>Check Ability To Connect Our Services In Your Area</h3>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;

import React from 'react';
import '../Header/Header.css'

const HeaderMain = () => {

    return (
        <main className="row mt-5">
            <div className="d-flex align-items-center ">
                <div className="col offset-md-1 ">
                    <h4 className='text-white'>Noboni Broadband Service</h4>
                    <h1>Connect The World <br /> With Noboni</h1>
                    <button className="btn btn-danger mt-5">View Details</button>
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;
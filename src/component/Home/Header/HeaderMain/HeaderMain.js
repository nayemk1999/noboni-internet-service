import React from 'react';
import Typical from "react-typical";
import './HeaderMain.css'

const HeaderMain = () => {

    return (
        <main className=" text-center mt-5">
            <Typical
                    className="typical"
                    steps={["", 500, "Noboni Broadband Service", 1000]}
                    loop={Infinity}
                    wrapper="h1"
                />
            <div className="row d-flex align-items-center justify-content-center m-auto m-2"> 
                <div className="col ">
                    {/* <h4 className='text-white'>Noboni Broadband Service</h4> */}
                    <h3>Connect The World <br /> With Noboni</h3>
                    <button className="btn btn-danger mt-3">View Details</button>
                </div>
            </div>

        </main>
    );
};

export default HeaderMain;
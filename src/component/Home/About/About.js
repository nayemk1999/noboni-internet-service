import React from 'react';
import about from '../../../image/about.jpg'

const About = () => {
    return (
        <div className='container mt-5'>
            <h4 className='text-brand  text-center'>About Noboni</h4>
            <h3 className=' pb-3 text-center'>Our About Section</h3>
            <div className="row d-flex">
                <div className="col-md-6">
                    <h2 className='pb-3'>Discover A Wider World Of Recreation</h2>
                    <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue idsem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies lectus orci congue magna in egestas nulla libero nonnis.</p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid rounded' src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
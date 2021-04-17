import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(()  => {
        fetch('https://noboni-internet-service.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='container overflow-hidden mt-5 mb-5'>
            <h4 className='text-brand text-center mb-1'>Our Testimonials</h4>
            <h2 className='text-center mb-5'>What Our Clients Say</h2>
            <div className="row gx-5 ">
                {
                    testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;
import React from 'react';

const Testimonial = ({ testimonial }) => {
    const {name, imgURL, company} = testimonial
    return (
        <div className='col-md-4'>
            <div class="shadow p-3 mb-5 bg-body rounded">
                <div className='d-flex'>
                    <img className='p-2 img-fluid rounded-circle mx-auto d-block' src={imgURL} alt=""/>
                    <div className='p-2'>
                        <h5>{name}</h5>
                        <p>{company}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, tenetur.</p>

            </div>
        </div>
    );
};

export default Testimonial;
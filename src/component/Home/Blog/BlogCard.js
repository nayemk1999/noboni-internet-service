import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import  './Blogs.css'
const BlogCard = ({ blogCardInfo }) => {
    const { title, description, icon } = blogCardInfo
    return (
        <div className="card shadow-sm " style={{width: '18rem'}}>
            <div className="card-body">
                <h1 className='text-brand'><FontAwesomeIcon icon={icon} /></h1>
                <h6>{title}</h6>
                <p className="card-text text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    );
};

export default BlogCard;
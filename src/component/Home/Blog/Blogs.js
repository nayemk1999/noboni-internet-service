import React from 'react';
import BlogCard from './BlogCard';
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroadcastTower, faSignal, faTachometerAlt, faWifi } from '@fortawesome/free-solid-svg-icons'

const BlogsData = [
    {
        title: 'Wifi Seamless',
        icon: faWifi
        
    },
    {
        title: 'Speed On Demand',
        icon: faSignal
    },
    {
        title: 'Upgrade Speed',
        icon: faBroadcastTower
    },
    {
        title: 'Download 1Gbps',
        icon:faTachometerAlt
    }
]
const Blogs = () => {
    return (
        <section className=' blogs mt-5 mb-5'>
        <div className="container">
            <div className="section-header">
                <h4  className='text-center text-brand'>OUR BLOGS</h4>
                <h3 className='text-center' style={{ color: '#343940' }}>We Are Internet Service Provider Company</h3>
            </div>
            <div className="card-deck mt-4">
                {
                    BlogsData.map(blogCardInfo => <BlogCard blogCardInfo={blogCardInfo}></BlogCard>)
                }
            </div>
        </div>

    </section>
    );
};

export default Blogs;
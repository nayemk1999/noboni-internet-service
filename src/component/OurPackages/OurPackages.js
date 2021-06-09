import React, { useEffect, useState } from 'react';
import PackageCard from '../Home/OurBestPlan/PackageCard';

const OurPackages = () => {
    const [packages, setPackages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://noboni-internet-service.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setLoading(true)
            })
    }, [])

    return (
        <div className='container mt-5 mb-5'>
            <h4 className='text-brand text-center'>Discover Our Best Plans</h4>
            <h3 className='text-center' style={{ color: '#343940' }}>Our Internet Service Package</h3>
            <div className="row mt-4">
                {loading ?
                    packages.map(packageCard => <PackageCard key={packageCard._id} packageCard={packageCard}></PackageCard>)
                    :
                    <div className="text-center m-auto">
                        <div class="spinner-border text-danger" style={{ width: '2rem', height: '2rem', marginTop: '30%', marginLeft: '60%' }} role="status">
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OurPackages;
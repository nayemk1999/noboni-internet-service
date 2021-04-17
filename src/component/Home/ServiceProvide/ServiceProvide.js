import React from 'react';
import ExtraServiceCard from './ExtraServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faRocket, faServer, faBroadcastTower, faMoneyBill, faHeadset, } from '@fortawesome/free-solid-svg-icons'


const serviceProvideData =[
    {
        title: '250+ Channels',
        icon:faTv
    },
    {
        title: 'Speed Seamless',
        icon:faRocket
    },
    {
        title: 'Free Installation',
        icon:faServer
    },
    {
        title: '4K & 8K Quality',
        icon:faBroadcastTower
    },
    {
        title: 'Flexible Tariff Plans',
        icon:faMoneyBill
    },
    {
        title: 'Fast Support 24/7',
        icon:faHeadset
    },
]
const ServiceProvide = () => {
    return (
        <div className='container mt-5 mb-5'>
            <h4 className='text-brand text-center'>Our Extra Service Provide</h4>
            <h3 className=' text-center mb-5'>Always Happy to be</h3>
            <div className="row p-2">
                {
                    serviceProvideData.map(extraServiceCard => <ExtraServiceCard extraServiceCard={extraServiceCard}></ExtraServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceProvide;
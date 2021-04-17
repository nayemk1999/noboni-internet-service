import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ExtraServiceCard = ({extraServiceCard}) => {
    const { title, icon} = extraServiceCard
    return (
        <div className='col-md-2'>
            <h4 className='text-brand'><FontAwesomeIcon icon={icon} /></h4>
            <h6>{title}</h6>
        </div>
    );
};

export default ExtraServiceCard;
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])


    return (
        <div>
            <div className='text-center space-y-4 mb-5'>
                <h3 className='text-2xl text-orange-500'>Service</h3>
                <h2 className='text-4xl font-bold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;
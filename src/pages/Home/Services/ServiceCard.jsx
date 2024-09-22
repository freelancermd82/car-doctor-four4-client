import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
const ServiceCard = ({ service }) => {

    const { img, title, price } = service;


    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <p className='text-orange-500 text-2xl'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
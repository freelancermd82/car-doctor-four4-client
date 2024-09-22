import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row pb-10 mt-5">
                <div className='relative'>
                    <img
                        src={person}
                        className="max-w-sm rounded-lg shadow-2xl w-3/4" />
                    <img
                        src={parts}
                        className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-5 top-24" />
                </div>
                <div className='space-y-5'>
                    <h1 className="text-5xl font-bold text-orange-500">About Us</h1>
                    <h3 className='text-5xl'>We are qualified & of experience in this field</h3>
                    <p className="py-6">
                    There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form,<br /> by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-secondary mt-4">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
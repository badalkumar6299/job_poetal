import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);
    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        });
        setIsSearched(true);
    };

    return (
        <div className='container mx-auto my-10 2cl:px-20'>
            <div className='py-16 mx-2 text-center text-white bg-gradient-to-r from-purple-800 to-purple-950 rounded-xl'>
                <h2 className='mb-4 text-2xl font-medium md:text-3xl lg:text-4xl'>Over 1000+ jobs to apply</h2>
                <p className="max-w-xl px-5 mb-8 text-sm font-light text-center mx-auto flex justify-center">
                    Your Next Big Career Move Starts Right Here - Explore the best Job Opportunities and take the first step Toward your Future!
                </p>
                <div className='flex items-center justify-between max-w-xl pl-4 mx-4 text-gray-600 bg-white rounded sm:mx-auto'>
                    <div className='flex items-center'>
                        <img className='h-4 sm:h-4' src={assets.search_icon} alt="" />
                        <input type="text" 
                            placeholder='Search for a Jobs'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={titleRef}
                        />
                    </div>
                    <div className='flex items-center'>
                        <img src={assets.location_icon} alt="" />
                        <input type="text" placeholder='Location'
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={locationRef} 
                        />
                    </div>
                    <button onClick={onSearch} className='px-6 py-2 m-1 text-white bg-blue-600 rounded '>Search</button>
                </div>
            </div>
            <div className='flex p-6 mx-2 mt-5 border border-gray-300 rounded-md shadow-md'>
                <div className='flex flex-wrap justify-center gap-10 lg:gap-16'>
                    <p className='font-medium font'>Trusted by</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="" />
                    <img className='h-6' src={assets.walmart_logo} alt="" />
                    <img className='h-6' src={assets.accenture_logo} alt="" />
                    <img className='h-6' src={assets.samsung_logo} alt="" />
                    <img className='h-6' src={assets.amazon_logo} alt="" />
                    <img className='h-6' src={assets.adobe_logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

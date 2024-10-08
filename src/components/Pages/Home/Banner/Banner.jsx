import React from 'react';
import bannerImage from "../../../../assets/images/Banner.png";

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full' src={bannerImage} alt="banner image" />
                <div className='w-full h-full bg-gradient-to-r from-[#111111FF] via-[#11111100] to-[#111111FF] absolute top-0 left-0'></div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transform translate bg-red-500 z-30'>
                <h2>We Provide Effective</h2>
                <h2>Legal Solutions</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                <div>
                    <input type="text" placeholder='Search your services' />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
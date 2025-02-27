import React, { useState } from 'react';

const HomeBanner = () => {
    const banners = [
        'https://picsum.photos/412/753?random=1',
        'https://picsum.photos/412/753?random=2',
        'https://picsum.photos/412/753?random=3'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[753px] md:w-full md:h-[716px] mt-8 mx-auto">
            <img
                src={banners[currentIndex]}
                alt="Banner"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <h3 className="text-white mb-8">Summer 2020</h3>
                <h1 className="text-white text-3xl mb-8">NEW COLLECTION</h1>
                <p className="text-white mb-8">Your paragraph content goes here</p>
                <button className="bg-green-500 text-white px-4 py-2">SHOP NOW</button>
            </div>

            {/* Left Arrow */}
            <button
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-full focus:outline-none"
            >
                <i className="fas fa-chevron-left" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleNextClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-full focus:outline-none"
            >
                <i className="fas fa-chevron-right" />
            </button>
        </div>
    );
};

export default HomeBanner;
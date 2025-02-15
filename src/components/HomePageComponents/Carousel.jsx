import React, { useState } from 'react';

const Carousel = () => {
    const images = [
        'https://picsum.photos/1440/682?random=1',
        'https://picsum.photos/1440/682?random=2',
        'https://picsum.photos/1440/682?random=3'
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full h-[414px] md:w-[1520px] md:h-[682px] overflow-hidden mx-auto">
            <img
                src={images[currentIndex]}
                alt="Carousel"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                <p className="text-white text-sm">Summer 2020</p>
                <h2 className="text-white text-3xl font-bold mt-2">
                    Vita Classic Product
                </h2>
                <p className="text-white text-lg mt-2">
                    Ürün açıklaması buraya gelecek. Ürünün detaylı açıklaması burada yer alabilir.
                </p>
                <div className="mt-4 flex flex-col gap-4 items-center">
                    <span className="text-white font-bold text-xl">$149</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Satın Al
                    </button>
                </div>
            </div>
            {/* Navigation Arrows */}
            <button
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
                &#8249;
            </button>
            <button
                onClick={handleNextClick}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            >
                &#8250;
            </button>
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
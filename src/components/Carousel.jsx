import React from 'react';

const Carousel = () => {
    const imageUrl = 'https://picsum.photos/1230/414?random=3'; // Örnek görsel

    return (
        <div className="relative w-[414px] h-[1230px] overflow-hidden">
            <img
                src={imageUrl}
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
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl">
                &#8249;
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl">
                &#8250;
            </button>
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
        </div>
    );
};

export default Carousel;
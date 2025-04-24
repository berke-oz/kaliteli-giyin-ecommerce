import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoSrc from '/src/images/Home-banner-video.mp4';


const HomeBanner = () => {

    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[753px] md:w-full md:h-[716px] mt-8 mx-auto">

            <video
                src={videoSrc}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-5xl md:text-6xl font-montserrat font-bold mb-4 leading-tight">
                    Tarzınızı Keşfedin
                </h1>
                <p className="text-white text-xl md:text-2xl font-montserrat mb-8 max-w-2xl">
                    Kaliteli ve şık giyimin adresi
                </p>
                <button
                    onClick={() => navigate('/shop')}
                    className="bg-white text-gray-900 px-8 py-4 rounded-md font-montserrat font-medium text-lg
                             hover:bg-gray-100 transition-colors duration-300 shadow-lg
                             transform hover:scale-105 transition-transform"
                >
                    Alışverişe Başla
                </button>
            </div>
        </div>
    );
};

export default HomeBanner;
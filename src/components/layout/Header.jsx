import React from 'react';
import banner from '../../images/product-slide-1.jpg';

const Header = () => {
    return (
        <header className="bg-white  p-4">
            <div className="container mx-auto flex justify-between items-center mb-8">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/">Bandage</a>
                </div>

                {/* Icons */}
                <div className="flex space-x-6">
                    <a href="#"><i className="icon-class-1"></i></a>
                    <a href="#"><i className="icon-class-2"></i></a>
                    <a href="#"><i className="icon-class-3"></i></a>
                    <a href="#"><i className="icon-class-4"></i></a>
                </div>
            </div>

            {/* Navbar */}
            <nav className="mt-15 mb-25 ml-15">
                <ul className="flex flex-col items-center space-y-8">
                    <li><a href="/" className="text-2xl">Home</a></li>
                    <li><a href="/product" className="text-2xl">Product</a></li>
                    <li><a href="/pricing" className="text-2xl">Pricing</a></li>
                    <li><a href="/contact" className="text-2xl">Contact</a></li>
                </ul>
            </nav>

            {/* Banner Image with Overlay and Navigation Arrows */}
            <div className="relative w-[412px] h-[753px] mt-8 ml-[-16px] mr-[-16px]">
                <img
                    src={banner}
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
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full focus:outline-none">
                    <i className="icon-left-arrow" />
                </button>

                {/* Right Arrow - m-4 kaldırıldı */}
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full focus:outline-none">
                    <i className="icon-right-arrow" />
                </button>
            </div>
        </header>
    );
};

export default Header;
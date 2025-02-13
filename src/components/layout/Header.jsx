import React, { useState } from 'react';
import { Phone, Mail, Instagram, Youtube, Facebook, Twitter, Search, ShoppingCart, Heart } from 'lucide-react';

const Header = () => {
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
        <header className="bg-white w-full">
            {/* Top Bar for Desktop */}
            <div className="hidden md:flex justify-between items-center bg-[#252B42] text-white px-4 py-2">
                <div className="flex space-x-4">
                    <span className="flex items-center"><Phone className="mr-2" /> +123 456 7890</span>
                    <span className="flex items-center"><Mail className="mr-2" /> info@example.com</span>
                </div>
                <div className="flex-grow text-center">
                    <span>Follow Us and get a chance to win %80 off</span>
                </div>
                <div className="flex space-x-4">
                    <span>Follow Us:</span>
                    <a href="#"><Instagram className="w-5 h-5" /></a>
                    <a href="#"><Youtube className="w-5 h-5" /></a>
                    <a href="#"><Facebook className="w-5 h-5" /></a>
                    <a href="#"><Twitter className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Navbar for Desktop */}
            <div className="hidden md:flex justify-between items-center bg-white px-9 py-2 w-full" style={{ height: '58px' }}>
                <div className="text-2xl font-bold">
                    <a href="/">Bandage</a>
                </div>
                <nav className="flex space-x-10">
                    <a href="/" className="text-base">Home</a>
                    <a href="/shop" className="text-base">Shop</a>
                    <a href="/about" className="text-base">About</a>
                    <a href="/blog" className="text-base">Blog</a>
                    <a href="/contact" className="text-base">Contact</a>
                    <a href="/pages" className="text-base">Pages</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <a href="/login" className="text-base text-[#23A6F0]">Login / Register</a>
                    <a href="#"><Search className="w-5 h-5" /></a>
                    <a href="#"><ShoppingCart className="w-5 h-5" /></a>
                    <a href="#"><Heart className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Navbar for Mobile */}
            <div className="container mx-auto flex justify-between items-center mb-8 md:hidden">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="/">Bandage</a>
                </div>

                {/* Icons */}
                <div className="flex space-x-6">
                    <a href="#"><Search className="w-5 h-5" /></a>
                    <a href="#"><ShoppingCart className="w-5 h-5" /></a>
                    <a href="#"><Heart className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Navbar Links for Mobile */}
            <nav className="mt-15 mb-25 ml-15 md:hidden">
                <ul className="flex flex-col items-center space-y-8">
                    <li><a href="/" className="text-2xl">Home</a></li>
                    <li><a href="/product" className="text-2xl">Product</a></li>
                    <li><a href="/pricing" className="text-2xl">Pricing</a></li>
                    <li><a href="/contact" className="text-2xl">Contact</a></li>
                </ul>
            </nav>

            {/* Banner Image with Overlay and Navigation Arrows */}
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
        </header>
    );
};

export default Header;
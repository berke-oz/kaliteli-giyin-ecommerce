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


        </header>
    );
};

export default Header;
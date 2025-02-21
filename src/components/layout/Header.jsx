import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Phone,
    Mail,
    Instagram,
    Youtube,
    Facebook,
    Twitter,
    Search,
    ShoppingCart,
    Heart,
} from "lucide-react";
import Gravatar from "react-gravatar";
import { logoutUser } from "../../actions/clientActions";
import { Link } from "react-router-dom";
import CategoryList from "../CategoryList";
import { fetchCategories } from "../../actions/categoryActions";

const Header = () => {
    const user = useSelector((state) => state.client.user);
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
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
                    <div
                        className="relative group"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/shop" className="text-base cursor-pointer">Shop</Link>
                        <div
                            className={`absolute bg-white shadow-lg mt-2 top-full left-0 w-60 z-50 border rounded transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <CategoryList />
                        </div>
                    </div>
                    <a href="/about" className="text-base">About</a>
                    <a href="/blog" className="text-base">Blog</a>
                    <a href="/contact" className="text-base">Contact</a>
                    <a href="/pages" className="text-base">Pages</a>
                </nav>
                <div className="flex items-center space-x-4">
                    {user.email ? (
                        <div className="flex items-center space-x-2">
                            <Gravatar email={user.email} size={40} className="rounded-full" />
                            <span>{user.name}</span>
                            <button onClick={handleLogout} className="text-base text-[#23A6F0]">Logout</button>
                        </div>
                    ) : (
                        <a href="/login" className="text-base text-[#23A6F0]">Login / Register</a>
                    )}
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
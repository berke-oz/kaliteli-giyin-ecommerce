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
    ChevronDown
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
            {/* Top Bar */}
            <div className="bg-[#252B42] text-white">
                <div className="max-w-[1440px] mx-auto px-6 py-3 hidden md:flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            (225) 555-0118
                        </span>
                        <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            michelle.rivera@example.com
                        </span>
                    </div>
                    <div className="text-center">
                        Follow Us  and get a chance to win 80% off
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="mr-2">Follow Us :</span>
                        <div className="flex items-center space-x-3">
                            <Instagram className="w-4 h-4" />
                            <Youtube className="w-4 h-4" />
                            <Facebook className="w-4 h-4" />
                            <Twitter className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Single Instance */}
            <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-[#252B42]">
                    Bandage
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <Link to="/" className="text-[#737373] hover:text-[#252B42]">Home</Link>
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/shop" className="text-[#737373] hover:text-[#252B42] flex items-center">
                            Shop
                            <ChevronDown className="ml-1 w-4 h-4" />
                        </Link>
                        <div
                            className={`absolute bg-white shadow-lg mt-4 top-full left-0 min-w-[400px] z-50 rounded-md transition-all duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                        >
                            <CategoryList />
                        </div>
                    </div>
                    <Link to="/about" className="text-[#737373] hover:text-[#252B42]">About</Link>
                    <Link to="/blog" className="text-[#737373] hover:text-[#252B42]">Blog</Link>
                    <Link to="/contact" className="text-[#737373] hover:text-[#252B42]">Contact</Link>
                    <Link to="/pages" className="text-[#737373] hover:text-[#252B42]">Pages</Link>
                </nav>

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    {user.email ? (
                        <div className="hidden lg:flex items-center space-x-2 text-[#23A6F0]">
                            <span>{user.name}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/login" className="hidden lg:flex items-center text-[#23A6F0]">
                            <span className="mr-1">Login</span> / <span className="ml-1">Register</span>
                        </Link>
                    )}
                    <div className="flex items-center space-x-4">
                        <button className="text-[#23A6F0]">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link to="/cart" className="flex items-center text-[#23A6F0]">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="ml-1">1</span>
                        </Link>
                        <Link to="/wishlist" className="flex items-center text-[#23A6F0]">
                            <Heart className="w-5 h-5" />
                            <span className="ml-1">1</span>
                        </Link>
                    </div>
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
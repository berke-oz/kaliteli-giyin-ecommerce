import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
    Heart,
    Menu,
    Search,
    ShoppingBag,
    User,
    X,
    ChevronDown
} from "lucide-react";
import { logoutUser } from "../../actions/clientActions";
import { fetchCategories } from "../../actions/categoryActions";
import CategoryList from "../CategoryList";
import CartDropdown from '../CartDropdown';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.client.user);
    const cartItems = useSelector(state => state.cart.items);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalItems = cartItems.reduce((total, item) => total + item.count, 0);

    useEffect(() => {
        dispatch(fetchCategories());

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-white"}`}>
            {/* Üst Bar */}
            <div className="hidden md:flex h-8 items-center justify-center bg-[#252B42] text-white text-sm">
                <p>Ücretsiz kargo - 300 TL ve üzeri siparişlerde</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex h-14 md:h-16 items-center justify-between">
                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 hover:bg-gray-100 rounded-md"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Menüyü aç</span>
                        </button>

                        {/* Mobile Menu Overlay */}
                        {isMobileMenuOpen && (
                            <div className="fixed inset-0 z-50 bg-white">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <Link to="/" className="flex items-center">
                                            <span className="text-2xl tracking-widest uppercase relative group">
                                                <span className="font-bold bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-all duration-500">
                                                    Dress
                                                </span>
                                                <span className="font-light">io</span>
                                                <span className="absolute -top-1 -right-2 h-1.5 w-1.5 bg-[#1a8ed0] rounded-full"></span>
                                            </span>
                                        </Link>
                                        <button
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="p-2 hover:bg-gray-100 rounded-md"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>

                                    <nav className="flex flex-col space-y-4 p-6">
                                        <Link to="/" className="py-2 text-lg font-medium hover:text-gray-600">
                                            Home
                                        </Link>
                                        <Link to="/shop" className="py-2 text-lg font-medium hover:text-gray-600">
                                            Shop
                                        </Link>
                                        <button
                                            onClick={() => navigate("/")}
                                            className="py-2 text-lg font-medium hover:text-gray-600 text-left"
                                        >
                                            About
                                        </button>
                                        <button
                                            onClick={() => navigate("/")}
                                            className="py-2 text-lg font-medium hover:text-gray-600 text-left"
                                        >
                                            Contact
                                        </button>
                                    </nav>

                                    <div className="mt-auto border-t p-4">
                                        {user.email ? (
                                            <div className="flex flex-col space-y-4">
                                                <span>{user.name}</span>
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex items-center py-2 hover:text-gray-600"
                                                >
                                                    <User className="h-5 w-5 mr-2" />
                                                    Çıkış Yap
                                                </button>
                                            </div>
                                        ) : (
                                            <Link to="/login" className="flex items-center py-2 hover:text-gray-600">
                                                <User className="h-5 w-5 mr-2" />
                                                Giriş Yap / Kayıt Ol
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-3xl tracking-widest uppercase relative group">
                            <span className="font-bold bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-all duration-500">
                                Dress
                            </span>
                            <span className="font-light">io</span>
                            <span className="absolute -top-1 -right-2 h-1.5 w-1.5 bg-[#1a8ed0] rounded-full"></span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
                            Home
                        </Link>
                        <div className="relative group">
                            <Link to="/shop" className="text-sm font-medium hover:text-gray-600 transition-colors flex items-center">
                                Shop <ChevronDown className="h-4 w-4 ml-1" />
                            </Link>
                            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 p-4 rounded-md min-w-[200px]">
                                <CategoryList />
                            </div>
                        </div>
                        <button
                            onClick={() => navigate("/")}
                            className="text-sm font-medium hover:text-gray-600 transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => navigate("/")}
                            className="text-sm font-medium hover:text-gray-600 transition-colors"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-5">
                        <button className="hidden md:flex p-2 hover:bg-gray-100 rounded-md">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Ara</span>
                        </button>

                        {user.email ? (
                            <div className="hidden md:flex items-center space-x-4">
                                <span className="text-sm">{user.name}</span>
                                <button
                                    onClick={handleLogout}
                                    className="text-sm hover:text-gray-600"
                                >
                                    Çıkış
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="hidden md:flex items-center text-sm font-medium hover:text-gray-600">
                                <User className="h-5 w-5 mr-1" />
                                <span>Giriş / Kayıt</span>
                            </Link>
                        )}



                        <div className="relative mt-[4px]">
                            <button
                                onClick={() => setIsCartOpen(!isCartOpen)}
                                className="relative"
                            >
                                <ShoppingBag className="h-5 w-5" />
                                <span className="sr-only">Sepet</span>
                                <span className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center bg-black text-white text-[10px] rounded-full">
                                    {totalItems}
                                </span>
                            </button>
                            {isCartOpen && <CartDropdown />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
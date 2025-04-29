import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-white text-gray-800 p-8">

            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-800 hover:text-blue-500">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            {/* Orta Kısım */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 className="font-bold mb-2">Company Info</h3>
                    <ul>
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                        <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                        <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Legal</h3>
                    <ul>
                        <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500">Carrier</a></li>
                        <li><a href="#" className="hover:text-blue-500">We are hiring</a></li>
                        <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Features</h3>
                    <ul>
                        <li><a href="#" className="hover:text-blue-500">Business Marketing</a></li>
                        <li><a href="#" className="hover:text-blue-500">User Analytic</a></li>
                        <li><a href="#" className="hover:text-blue-500">Live Chat</a></li>
                        <li><a href="#" className="hover:text-blue-500">Unlimited Support</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Resources</h3>
                    <ul>
                        <li><a href="#" className="hover:text-blue-500">IOS & Android</a></li>
                        <li><a href="#" className="hover:text-blue-500">Watch a Demo</a></li>
                        <li><a href="#" className="hover:text-blue-500">Customers</a></li>
                        <li><a href="#" className="hover:text-blue-500">API</a></li>
                    </ul>
                </div>
            </div>

            <div className="mb-8 text-center">
                <h3 className="font-bold mb-2">Get in Touch</h3>
                <div className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border border-gray-300 rounded-l"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                        Subscribe
                    </button>
                </div>
            </div>


            <div className="text-center text-gray-500 text-sm">
                Made With Love By Finland All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
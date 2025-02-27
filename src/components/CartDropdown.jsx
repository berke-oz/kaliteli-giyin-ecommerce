import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { removeFromCart } from '../actions/cartActions';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);

    const totalPrice = cartItems.reduce((total, item) =>
        total + (item.product.price * item.count), 0
    );

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleContinueShopping = () => {
        navigate('/shop');
    };

    return (
        <div className="absolute top-full right-0 mt-2 w-[calc(100vw-2rem)] sm:w-[28rem] bg-white 
                      shadow-xl rounded-xl z-50 border border-gray-100 max-h-[85vh] overflow-hidden">
            <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-[#23A6F0]" />
                        <h3 className="text-lg sm:text-xl font-bold text-[#252B42] font-montserrat">
                            Sepetim ({cartItems.length})
                        </h3>
                    </div>
                    {cartItems.length > 0 && (
                        <Link
                            to="/cart"
                            className="text-sm text-[#23A6F0] hover:text-[#1B80BD] font-medium"
                        >
                            Sepete Git
                        </Link>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center py-8">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <ShoppingBag className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 font-montserrat mb-4">Sepetiniz boş</p>
                        <button
                            onClick={handleContinueShopping}
                            className="text-[#23A6F0] hover:text-[#1B80BD] font-medium 
                                     hover:underline transition-colors"
                        >
                            Alışverişe Başla
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="max-h-[40vh] sm:max-h-[50vh] overflow-auto pr-2 space-y-4 
                                      scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {cartItems.map(item => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-3 sm:gap-4 p-3 rounded-lg hover:bg-gray-50 
                                             transition-colors relative group"
                                >
                                    <div className="relative w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0">
                                        <img
                                            src={item.product.images?.[0]?.url}
                                            alt={item.product.name}
                                            className="w-full h-full object-cover rounded-md shadow-sm"
                                        />
                                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#23A6F0] 
                                                       text-white text-xs rounded-full flex items-center 
                                                       justify-center font-medium">
                                            {item.count}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[#252B42] font-semibold mb-1 truncate 
                                                     text-sm sm:text-base font-montserrat">
                                            {item.product.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-[#23A6F0] font-semibold">
                                                ${item.product.price}
                                            </span>
                                            <span className="text-gray-500">x {item.count}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Toplam: ${(item.count * item.product.price).toFixed(2)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.product.id)}
                                        className="absolute top-2 right-2 p-1.5 rounded-full text-gray-400 
                                                 hover:text-red-500 hover:bg-red-50 transition-all 
                                                 duration-200 opacity-0 group-hover:opacity-100"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <span className="text-gray-600 font-montserrat">Toplam</span>
                                <span className="text-lg sm:text-xl font-bold text-[#252B42] 
                                             font-montserrat">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    to="/cart"
                                    className="block w-full text-center bg-[#23A6F0] text-white py-3 
                                             rounded-lg font-semibold hover:bg-[#1B80BD] 
                                             transition-colors duration-200"
                                >
                                    Sepete Git
                                </Link>
                                <button
                                    onClick={handleContinueShopping}
                                    className="block w-full text-center border-2 border-[#23A6F0] 
                                             text-[#23A6F0] py-3 rounded-lg font-semibold 
                                             hover:bg-[#23A6F0] hover:text-white transition-colors 
                                             duration-200"
                                >
                                    Alışverişe Devam Et
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartDropdown; 
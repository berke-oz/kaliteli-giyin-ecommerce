import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
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
        <div className="absolute top-full right-0 mt-2 w-96 bg-white shadow-xl rounded-lg z-50 border border-gray-100">
            <div className="p-6">
                <h3 className="text-xl font-bold text-[#252B42] mb-6 font-montserrat">
                    Sepetim ({cartItems.length})
                </h3>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center py-8">
                        <p className="text-gray-500 font-montserrat">Sepetiniz boş</p>
                        <Link
                            to="/shop"
                            className="mt-4 text-[#23A6F0] hover:text-[#1B80BD] font-medium"
                        >
                            Alışverişe Başla
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="max-h-[400px] overflow-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {cartItems.map(item => (
                                <div
                                    key={item.product.id}
                                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors relative group"
                                >
                                    <img
                                        src={item.product.images[0]?.url}
                                        alt={item.product.name}
                                        className="w-20 h-20 object-cover rounded-md shadow-sm"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-[#252B42] font-semibold mb-1 truncate font-montserrat">
                                            {item.product.name}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="font-medium">{item.count}x</span>
                                            <span className="text-[#23A6F0] font-semibold">
                                                ${item.product.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Toplam: ${(item.count * item.product.price).toFixed(2)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(item.product.id)}
                                        className="absolute top-2 right-2 p-1.5 rounded-full text-gray-400 
                                                 hover:text-red-500 hover:bg-red-50 transition-all duration-200
                                                 opacity-0 group-hover:opacity-100"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-600 font-montserrat">Toplam</span>
                                <span className="text-xl font-bold text-[#252B42] font-montserrat">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <Link
                                    to="/cart"
                                    className="block w-full text-center bg-[#23A6F0] text-white py-3 rounded-lg
                                             font-semibold hover:bg-[#1B80BD] transition-colors duration-200"
                                >
                                    Sepete Git
                                </Link>
                                <button
                                    onClick={handleContinueShopping}
                                    className="block w-full text-center border-2 border-[#23A6F0] text-[#23A6F0] 
                                             py-3 rounded-lg font-semibold hover:bg-[#23A6F0] hover:text-white 
                                             transition-colors duration-200"
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
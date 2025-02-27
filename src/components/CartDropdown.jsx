import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.items);

    const totalPrice = cartItems.reduce((total, item) =>
        total + (item.product.price * item.count), 0
    );

    return (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-lg rounded-md z-50">
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">Sepetim ({cartItems.length})</h3>

                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Sepetiniz boş</p>
                ) : (
                    <>
                        <div className="max-h-80 overflow-auto">
                            {cartItems.map(item => (
                                <div key={item.product.id} className="flex gap-3 mb-3 pb-3 border-b">
                                    <img
                                        src={item.product.images[0]?.url}
                                        alt={item.product.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div className="flex-1">
                                        <h4 className="text-sm font-medium">{item.product.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {item.count} x ${item.product.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-3 border-t">
                            <div className="flex justify-between mb-4">
                                <span className="font-medium">Toplam:</span>
                                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                            </div>

                            <Link
                                to="/cart"
                                className="block w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            >
                                Sepete Git
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartDropdown; 
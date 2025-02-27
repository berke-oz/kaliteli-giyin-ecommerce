import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartTable from '../components/Cart/CartTable';
import CartSummary from '../components/Cart/CartSummary';
import EmptyCart from '../components/Cart/EmptyCart';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold text-[#252B42] mb-8 font-montserrat">
                Alışveriş Sepeti
            </h1>

            {cartItems.length === 0 ? (
                <EmptyCart onShopClick={() => navigate('/shop')} />
            ) : (
                <div className="space-y-8">
                    <CartTable items={cartItems} />
                    <CartSummary items={cartItems} />
                </div>
            )}
        </div>
    );
};

export default CartPage; 
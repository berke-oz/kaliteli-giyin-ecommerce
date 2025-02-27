import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Layout from '../layout/Layout';
import EmptyCart from '../Cart/EmptyCart';
import CartTable from '../Cart/CartTable';
import CartSummary from '../Cart/CartSummary';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="flex items-center gap-3 mb-8">
                    <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 text-[#23A6F0]" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#252B42] font-montserrat">
                        Alışveriş Sepetim
                    </h1>
                </div>

                {cartItems.length === 0 ? (
                    <EmptyCart onShopClick={() => navigate('/shop')} />
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                        <div className="w-full lg:w-2/3">
                            <CartTable items={cartItems} />
                        </div>
                        <div className="w-full lg:w-1/3 sticky top-4">
                            <CartSummary items={cartItems} />
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CartPage; 
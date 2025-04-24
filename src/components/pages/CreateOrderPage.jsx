import React from 'react';
import { useSelector } from 'react-redux';
import AddressSection from '../Order/AddressSection';
import CartSummary from '../Cart/CartSummary';
import StepIndicator from '../Order/StepIndicator';

const CreateOrderPage = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <StepIndicator activeStep={1} />
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-8">
                    <AddressSection />
                </div>
                <div className="lg:w-1/3">
                    <CartSummary items={cartItems} />
                </div>
            </div>
        </div>
    );
};

export default CreateOrderPage; 
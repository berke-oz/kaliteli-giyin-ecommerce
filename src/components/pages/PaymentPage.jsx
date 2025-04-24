import React from 'react';
import Layout from '../layout/Layout';
import StepIndicator from '../Order/StepIndicator';
import PaymentForm from '../Cart/PaymentForm';

const PaymentPage = () => {
    return (
        <Layout>
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <StepIndicator activeStep={2} />
                    <div className="max-w-3xl mx-auto">
                        <PaymentForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default PaymentPage;
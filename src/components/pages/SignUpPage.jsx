import React from 'react';
import Layout from '../layout/Layout';
import SignupForm from '../SignupForm';


const SignUpPage = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <SignupForm />
            </div>
        </Layout>
    );
};

export default SignUpPage;
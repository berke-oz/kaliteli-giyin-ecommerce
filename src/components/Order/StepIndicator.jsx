import React from 'react';
import { Check } from 'lucide-react';

const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, title: 'Adres Bilgileri' },
        { number: 2, title: 'Ödeme Seçenekleri' }
    ];

    return (
        <div className="mb-8">
            <div className="flex items-center justify-center">
                {steps.map((step, index) => (
                    <React.Fragment key={step.number}>
                        {/* Step circle */}
                        <div className="flex flex-col items-center">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full 
                                          ${currentStep >= step.number
                                    ? 'bg-[#23A6F0] text-white'
                                    : 'bg-gray-200 text-gray-500'}`}
                            >
                                {currentStep > step.number ? (
                                    <Check className="w-5 h-5" />
                                ) : (
                                    step.number
                                )}
                            </div>
                            <span className={`mt-2 text-sm font-medium
                                           ${currentStep >= step.number
                                    ? 'text-[#23A6F0]'
                                    : 'text-gray-500'}`}
                            >
                                {step.title}
                            </span>
                        </div>
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div className={`w-24 h-1 mx-4
                                          ${currentStep > 1
                                    ? 'bg-[#23A6F0]'
                                    : 'bg-gray-200'}`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default StepIndicator; 
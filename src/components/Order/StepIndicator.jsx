import React from 'react';

const StepIndicator = ({ activeStep }) => {
    const steps = [
        { id: 1, label: 'Sipariş Detayları' },
        { id: 2, label: 'Ödeme Seçenekleri' },
    ];

    return (
        <div className="flex justify-center items-center gap-8 mb-8">
            {steps.map((step, index) => (
                <div key={step.id} className="flex items-center gap-2">
                    <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${activeStep === step.id ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    >
                        {step.id}
                    </div>
                    <span
                        className={`text-sm font-medium ${activeStep === step.id ? 'text-blue-600' : 'text-gray-500'
                            }`}
                    >
                        {step.label}
                    </span>
                    {index < steps.length - 1 && (
                        <div
                            className={`w-16 h-px ${activeStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        ></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StepIndicator;
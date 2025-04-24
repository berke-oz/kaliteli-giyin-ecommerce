import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Calendar, Lock, User } from "lucide-react";

const PaymentForm = () => {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);


    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const formattedValue = value
            .replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim();

        if (value.length <= 16) {
            setCardNumber(formattedValue);
        }
    };


    const handleExpiryChange = (e) => {
        const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

        if (value.length <= 4) {
            if (value.length > 2) {
                setExpiry(`${value.slice(0, 2)}/${value.slice(2)}`);
            } else {
                setExpiry(value);
            }
        }
    };


    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

        if (value.length <= 4) {
            setCvv(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!cardNumber || !cardName || !expiry || !cvv) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        setIsProcessing(true);


        setTimeout(() => {
            setIsProcessing(false);

            navigate("/payment-success");
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-[5px]">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg p-6">
                    <h2 className="text-2xl font-bold">Ödeme Bilgileri</h2>
                    <p className="text-blue-100">Güvenli ödeme işlemi için kart bilgilerinizi girin</p>
                </div>
                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <CreditCard className="mr-2 h-4 w-4 text-gray-500" />
                                <label htmlFor="card-number" className="text-sm font-medium text-gray-700">
                                    Kart Numarası
                                </label>
                            </div>
                            <input
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                className="appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                                disabled={isProcessing}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-gray-500" />
                                <label htmlFor="card-name" className="text-sm font-medium text-gray-700">
                                    Kart Üzerindeki İsim
                                </label>
                            </div>
                            <input
                                id="card-name"
                                placeholder="Ad Soyad"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                className="appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                                disabled={isProcessing}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                                    <label htmlFor="expiry" className="text-sm font-medium text-gray-700">
                                        Son Kullanma Tarihi
                                    </label>
                                </div>
                                <input
                                    id="expiry"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    className="appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    disabled={isProcessing}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Lock className="mr-2 h-4 w-4 text-gray-500" />
                                    <label htmlFor="cvv" className="text-sm font-medium text-gray-700">
                                        CVV
                                    </label>
                                </div>
                                <input
                                    id="cvv"
                                    type="password"
                                    placeholder="***"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    className="appearance-none block w-full px-4 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                    disabled={isProcessing}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`w-full py-3 px-6 rounded-lg shadow-md text-white font-medium ${isProcessing
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                }`}
                            disabled={isProcessing}
                        >
                            {isProcessing ? "İşleniyor..." : "Ödemeyi Tamamla"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;
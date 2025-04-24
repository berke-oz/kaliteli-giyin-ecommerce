import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccessPage() {
    const navigate = useNavigate();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg text-center p-6">
                    <div className="flex justify-center mb-2">
                        <CheckCircle className="h-16 w-16" />
                    </div>
                    <h1 className="text-2xl font-bold">Ödeme Başarılı!</h1>
                    <p className="text-green-100">
                        Ödemeniz başarıyla tamamlandı ve işleminiz onaylandı.
                    </p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">İşlem Numarası:</span>
                            <span className="font-medium">{generateOrderNumber()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Tarih:</span>
                            <span className="font-medium">{new Date().toLocaleDateString("tr-TR")}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Durum:</span>
                            <span className="font-medium text-green-600">Onaylandı</span>
                        </div>
                    </div>

                    <div className="text-center text-gray-600 mt-4">
                        <p>Ödeme makbuzunuz e-posta adresinize gönderilecektir.</p>
                        <p className="mt-2">Teşekkür ederiz!</p>
                    </div>
                </div>
                <div className="flex justify-center p-4">
                    <button
                        onClick={() => navigate("/")}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all"
                    >
                        Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        </main>
    );
}


function generateOrderNumber() {
    return `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
}
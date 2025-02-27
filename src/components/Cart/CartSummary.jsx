import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ items }) => {
    const navigate = useNavigate();

    const totalAmount = items
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    const subtotal = totalAmount;
    const shipping = totalAmount > 0 ? 10 : 0;
    const tax = totalAmount * 0.18;
    const total = subtotal + shipping + tax;

    const handleContinueShopping = () => {
        navigate('/shop');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-2xl font-bold text-[#252B42] mb-6 font-montserrat">
                Sipariş Özeti
            </h3>

            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Ara Toplam</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Kargo</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>KDV (18%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-xl font-bold text-[#252B42]">
                    <span>Toplam</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <button className="w-full bg-[#23A6F0] text-white py-4 rounded-xl font-semibold
                           hover:bg-[#1a8ed0] transform hover:-translate-y-0.5 transition-all duration-200
                           flex items-center justify-center gap-2 mb-3">
                Siparişi Tamamla
                <ArrowRight className="w-5 h-5" />
            </button>

            <button
                onClick={handleContinueShopping}
                className="w-full border-2 border-[#23A6F0] text-[#23A6F0] py-4 rounded-xl
                         font-semibold hover:bg-[#23A6F0] hover:text-white transition-all duration-200"
            >
                Alışverişe Devam Et
            </button>
        </div>
    );
};

export default CartSummary; 
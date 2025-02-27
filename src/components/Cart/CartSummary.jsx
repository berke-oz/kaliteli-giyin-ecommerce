import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSummary = ({ items }) => {
    const navigate = useNavigate();
    const FREE_SHIPPING_THRESHOLD = 150;

    const totalAmount = items
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    const subtotal = totalAmount;
    const shipping = totalAmount > 0 ? (totalAmount >= FREE_SHIPPING_THRESHOLD ? 0 : 10) : 0;
    const tax = totalAmount * 0.18;
    const total = subtotal + shipping + tax;

    const selectedItemCount = items.filter(item => item.checked).length;
    const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - totalAmount;

    const handleContinueShopping = () => {
        navigate('/shop');
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#252B42] mb-4 sm:mb-6 font-montserrat">
                Sipariş Özeti
            </h3>

            {totalAmount > 0 && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg flex items-center gap-3 
                    ${totalAmount >= FREE_SHIPPING_THRESHOLD
                        ? 'bg-green-50 text-green-700'
                        : 'bg-blue-50 text-blue-700'}`}
                >
                    <Truck className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">
                        {totalAmount >= FREE_SHIPPING_THRESHOLD ? (
                            'Kargo Bedava! 🎉'
                        ) : (
                            `$${remainingForFreeShipping.toFixed(2)} daha harcayarak ücretsiz kargo fırsatından yararlanın!`
                        )}
                    </p>
                </div>
            )}

            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Seçili Ürünler ({selectedItemCount})</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {totalAmount > 0 && (
                    <>
                        <div className="flex justify-between text-gray-600">
                            <div className="flex items-center gap-2">
                                <span>Kargo</span>
                                {totalAmount >= FREE_SHIPPING_THRESHOLD && (
                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                        Bedava
                                    </span>
                                )}
                            </div>
                            <span className="font-medium">
                                {shipping === 0 ? 'Ücretsiz' : `$${shipping.toFixed(2)}`}
                            </span>
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
                    </>
                )}
            </div>

            <button
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mb-3
                          transition-all duration-200 ${totalAmount > 0
                        ? 'bg-[#23A6F0] text-white hover:bg-[#1a8ed0] transform hover:-translate-y-0.5'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                disabled={totalAmount === 0}
            >
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
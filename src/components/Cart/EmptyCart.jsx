import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const EmptyCart = ({ onShopClick }) => (
    <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 
                      rounded-full mb-6">
            <ShoppingBag className="w-10 h-10 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-[#252B42] mb-3 font-montserrat">
            Sepetiniz Boş
        </h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Sepetinizde ürün bulunmamaktadır. Hemen alışverişe başlayarak sepetinizi doldurun!
        </p>
        <button
            onClick={onShopClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#23A6F0] text-white 
                     rounded-xl font-semibold hover:bg-[#1a8ed0] transform hover:-translate-y-0.5 
                     transition-all duration-200"
        >
            Alışverişe Başla
            <ArrowRight className="w-5 h-5" />
        </button>
    </div>
);

export default EmptyCart; 
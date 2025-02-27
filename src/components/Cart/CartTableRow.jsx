import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartTableRow = ({ item, onQuantityChange, onRemove, onToggleCheck }) => {
    const { product, count, checked } = item;

    return (
        <div className="group hover:bg-gray-50 transition-colors duration-200">
            <div className="grid grid-cols-12 gap-4 p-6 items-center">
                <div className="col-span-1">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleCheck(product.id, checked)}
                        className="w-5 h-5 text-[#23A6F0] rounded-lg border-gray-300 
                                 focus:ring-[#23A6F0] focus:ring-offset-2 transition-all duration-200"
                    />
                </div>
                <div className="col-span-2">
                    <div className="relative overflow-hidden rounded-xl aspect-square">
                        <img
                            src={product.images?.[0]?.url || product.imageUrl || product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                                e.target.src = '/placeholder-image.jpg';
                                e.target.onerror = null;
                            }}
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className="font-semibold text-[#252B42] text-lg mb-1 font-montserrat">
                        {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">SKU: {product.id}</p>
                </div>
                <div className="col-span-2">
                    <span className="text-[#23A6F0] font-bold text-lg">
                        ${product.price}
                    </span>
                </div>
                <div className="col-span-2">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => onQuantityChange(product.id, count - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border-2 
                                     border-gray-200 hover:border-[#23A6F0] hover:text-[#23A6F0] 
                                     transition-all duration-200"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">
                            {count}
                        </span>
                        <button
                            onClick={() => onQuantityChange(product.id, count + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg border-2 
                                     border-gray-200 hover:border-[#23A6F0] hover:text-[#23A6F0] 
                                     transition-all duration-200"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <div className="col-span-1">
                    <span className="font-bold text-lg text-[#252B42]">
                        ${(product.price * count).toFixed(2)}
                    </span>
                </div>
                <div className="col-span-1">
                    <button
                        onClick={() => onRemove(product.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 
                                 rounded-lg transition-all duration-200"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTableRow; 
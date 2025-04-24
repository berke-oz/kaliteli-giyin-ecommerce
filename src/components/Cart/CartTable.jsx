import React from 'react';
import { useDispatch } from 'react-redux';
import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';
import { removeFromCart, updateQuantity } from '../../actions/cartActions';
import { Trash2, Minus, Plus } from 'lucide-react';

const CartTable = ({ items }) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (productId, newCount) => {
        if (newCount >= 1) {
            dispatch(updateQuantity(productId, newCount));
        }
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleToggleCheck = (productId, currentChecked) => {
        dispatch({
            type: 'TOGGLE_ITEM_CHECK',
            payload: { productId, checked: !currentChecked }
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">

            <div className="hidden sm:block">
                <CartTableHeader />
                <div className="divide-y divide-gray-100">
                    {items.map(item => (
                        <CartTableRow
                            key={item.product.id}
                            item={item}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemoveItem}
                            onToggleCheck={handleToggleCheck}
                        />
                    ))}
                </div>
            </div>


            <div className="sm:hidden divide-y divide-gray-100">
                {items.map(item => (
                    <div key={item.product.id} className="p-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => handleToggleCheck(item.product.id, item.checked)}
                                className="mt-1 w-4 h-4 text-[#23A6F0] rounded-lg border-gray-300 
                                         focus:ring-[#23A6F0] focus:ring-offset-2"
                            />
                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src={item.product.images?.[0]?.url || item.product.imageUrl}
                                    alt={item.product.name}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-[#252B42] text-lg mb-1 font-montserrat">
                                    {item.product.name}
                                </h3>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[#23A6F0] font-semibold">
                                        ${item.product.price}
                                    </span>
                                    <button
                                        onClick={() => handleRemoveItem(item.product.id)}
                                        className="p-1 text-gray-400 hover:text-red-500"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.product.id, item.count - 1)}
                                            className="p-1 rounded border hover:bg-gray-100"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center">{item.count}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.product.id, item.count + 1)}
                                            className="p-1 rounded border hover:bg-gray-100"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <span className="font-semibold text-[#252B42]">
                                        ${(item.product.price * item.count).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartTable; 
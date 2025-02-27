import React from 'react';
import { useDispatch } from 'react-redux';
import CartTableHeader from './CartTableHeader';
import CartTableRow from './CartTableRow';
import { removeFromCart, updateQuantity } from '../../actions/cartActions';

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
    );
};

export default CartTable; 
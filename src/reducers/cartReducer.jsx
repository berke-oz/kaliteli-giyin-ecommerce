const initialState = {
    items: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.product.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.product.id === action.payload.id
                            ? { ...item, count: item.count + 1 }
                            : item
                    )
                };
            }

            return {
                ...state,
                items: [...state.items, { count: 1, checked: true, product: action.payload }]
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.product.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: action.payload.count }
                        : item
                )
            };

        default:
            return state;
    }
};

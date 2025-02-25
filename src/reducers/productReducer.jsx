const initialState = {
    products: [],
    total: 0,
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            console.log('FETCH_PRODUCTS_SUCCESS action payload:', action.payload); // Burada payload'ı kontrol edebilirsiniz
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                total: action.payload.total
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export default productReducer;
const initialState = {
    products: [],
    total: 0,
    loading: false,
    error: null,
    product: null // Tek bir ürünün detayları
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
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                total: action.payload.total,
                error: null
            };
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            };

        // Tek bir ürünün detaylarını almak için
        case 'FETCH_PRODUCT_START':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload, // API'den gelen ürün detaylarını kaydet
                error: null
            };
        case 'FETCH_PRODUCT_FAILURE':
            return {
                ...state,
                loading: false,
                product: null,
                error: action.payload
            };

        default:
            return state;
    }
};

export default productReducer;

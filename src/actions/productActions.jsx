import api from "../services/api";


export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_START' });

    try {
        // Use the api instance from api.js
        const response = await api.get('/products');
        console.log('API Response:', response.data);

        if (response.data && Array.isArray(response.data.products)) {
            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                payload: {
                    products: response.data.products,
                    total: response.data.total
                }
            });
        } else {
            throw new Error('Invalid API response format');
        }
    } catch (error) {
        console.error('API Fetch Error:', error);
        dispatch({
            type: 'FETCH_PRODUCTS_FAILURE',
            payload: error.message
        });
    }
};
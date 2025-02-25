import api from "../services/api";

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProducts = (categoryId, sort, filter, limit = 40, offset = 0) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_START });

    try {
        const params = new URLSearchParams();
        if (categoryId) params.append('category', categoryId);
        if (sort) params.append('sort', sort);
        if (filter) params.append('filter', filter);
        params.append('limit', limit.toString());
        params.append('offset', offset.toString());

        const queryString = params.toString();
        const url = `/products${queryString ? `?${queryString}` : ''}`;

        const response = await api.get(url);
        console.log('API Response:', response.data);

        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: {
                products: response.data.products,
                total: response.data.total
            }
        });
    } catch (error) {
        console.error('API Error:', error);
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: error.message
        });
    }
};
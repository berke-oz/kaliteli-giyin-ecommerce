import api from '../services/api';

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
});

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const response = await api.get('/categories');
            dispatch(setCategories(response.data));
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        }
    };
};
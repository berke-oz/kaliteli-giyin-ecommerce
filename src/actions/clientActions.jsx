import api from '../services/api';
import { toast } from 'react-toastify';

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const setRoles = (roles) => ({
    type: 'SET_ROLES',
    payload: roles,
});

export const setTheme = (theme) => ({
    type: 'SET_THEME',
    payload: theme,
});

export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language,
});

export const fetchRoles = () => {
    return async (dispatch, getState) => {
        const { client } = getState();
        if (client.roles.length === 0) {
            try {
                const response = await api.get('/api/roles');
                dispatch({ type: 'FETCH_ROLES_SUCCESS', payload: response.data });
            } catch (error) {
                console.error('Failed to fetch roles:', error);
            }
        }
    };
};

export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/login', {
                email: data.email,
                password: data.password,
            });

            const user = response.data;

            if (user.token) {
                api.defaults.headers.common['Authorization'] = user.token;

                dispatch(setUser(user));

                sessionStorage.setItem('user', JSON.stringify(user));
                if (data.rememberMe) {
                    localStorage.setItem('token', user.token);
                }

                toast.success('Giriş başarılı!');
                return true;
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Email veya şifre hatalı!');
            throw error;
        }
    };
};

export const loadUserFromStorage = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (user) {
            dispatch(setUser(user));
            api.defaults.headers.common['Authorization'] = user.token;
        } else if (token) {
            api.defaults.headers.common['Authorization'] = token;
            try {
                const response = await api.get('/verify');
                const verifiedUser = response.data;

                dispatch(setUser(verifiedUser));
                sessionStorage.setItem('user', JSON.stringify(verifiedUser));
            } catch (error) {
                localStorage.removeItem('token');
                delete api.defaults.headers.common['Authorization'];
            }
        }
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        sessionStorage.removeItem('user');
        localStorage.removeItem('token');
        delete api.defaults.headers.common['Authorization'];
        dispatch(setUser({}));
    };
};
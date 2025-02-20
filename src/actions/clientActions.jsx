import api from '../services/api';

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

            if (response.status !== 200) {
                throw new Error('Login failed');
            }

            const user = response.data;
            dispatch(setUser(user));

            if (data.rememberMe) {
                localStorage.setItem('user', JSON.stringify(user));
            }
        } catch (error) {
            throw new Error('Login failed');
        }
    };
};

export const loadUserFromLocalStorage = () => {
    return (dispatch) => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch(setUser(JSON.parse(user)));
        }
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('user');
        dispatch(setUser({}));
    };
};
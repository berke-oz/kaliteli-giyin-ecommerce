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
    return async (dispatch) => {
        dispatch({ type: 'FETCH_ROLES_REQUEST' });
        try {
            const response = await fetch('/api/roles');
            const data = await response.json();
            dispatch(setRoles(data));
        } catch (error) {
            dispatch({ type: 'FETCH_ROLES_FAILURE', error });
        }
    };
};
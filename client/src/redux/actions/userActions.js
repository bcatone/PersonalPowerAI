export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

export const updateUser = (name, value) => ({
    type: 'UPDATE_USER',
    payload: { name, value },
});

export const clearUser = () => ({
    type: 'CLEAR_USER'
});
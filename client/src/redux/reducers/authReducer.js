const initialState = {
    user: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };
    case 'UPDATE_USER':
      const { name, value } = action.payload;
      return {
        ...state,
        user: {
            ...state.user,
            [name]: value,
        },
      };
    case 'CLEAR_USER':
      return {
        user: null,
        isAuthenticated: false,
      }
    default:
      return state;
  }
};

export default authReducer;
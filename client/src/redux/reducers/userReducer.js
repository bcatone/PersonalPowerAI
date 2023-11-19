const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      };
    case 'UPDATE_USER':
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    case 'CLEAR_USER':
      return {
      }
    default:
      return state;
  }
};

export default userReducer;
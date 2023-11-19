const initialState = {
    isLoading: false,
};

const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};

export default isLoadingReducer;
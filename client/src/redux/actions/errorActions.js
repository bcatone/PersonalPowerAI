export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });
  
  export const clearError = () => ({
    type: 'CLEAR_ERROR',
  });
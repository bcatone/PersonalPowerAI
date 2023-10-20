const initialState = {
    id: 0,
    username: "",
    email: "",
    phone: "",
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    dateOfBirth: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    timezone: "",
    genders: [],
    races: []
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
          phone: action.payload.email,
          firstName: action.payload.firstName,
          middleName: action.payload.middleName,
          lastName: action.payload.lastName,
          suffix: action.payload.suffix,
          dateOfBirth: action.payload.suffix,
          city: action.payload.city,
          state: action.payload.state,
          zipCode: action.payload.zipCode,
          country: action.payload.country,
          timezone: action.payload.timezone,
          genders: action.payload.genders,
          races: action.payload.races
        };
      case 'UPDATE_USER':
        const { name, value } = action.payload;
        return {
          ...state,
          [name]: value
        }
      default:
        return state;
    }
  };
  
  export default userReducer;
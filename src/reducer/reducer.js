export const initialState = {
  user: [],
  isLoggedIn: false,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_LOGIN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
    default: return state
  }
};

export default reducer;

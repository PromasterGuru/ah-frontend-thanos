import actionTypes from '../actions/actionTypes';


const initialState = {
  isLoggedIn: false,
};

const socialLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SOCIAL_LOGIN:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default: return state;
  }
};
export default socialLoginReducer;

// handle all actions pertaining to the user (login, registration, ...)
import actionTypes from '../actions/actionTypes';

const initialState = {
  freshUser: {
    password: '',
    email: '',
    username: '',
  },
};

const user = (state = initialState, action) => {
  const getInputData = {
    ...state,
    freshUser: action.payload,
  };
  const regData = {
    ...state,
    data: action.payload,
  };
  switch (action.type) {
    case actionTypes.GET_USER_INPUT:
      return getInputData;
    case actionTypes.USER_REGISTER_SUCCESS:
      return regData;
    case actionTypes.USER_REGISTER_FAIL:
      return regData;
    default: return state;
  }
};

export default user;

import actionTypes from '../actions/actionTypes';

const initialState = {
  profile: {
    first_name: '',
    last_name: '',
    bio: '',
    image: '',

  },
};
const profileReducer = (state = initialState, action) => {
  const { profile } = state;
  switch (action.type) {
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
      };
    case actionTypes.EDIT_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.profile,
        },
      };
    case actionTypes.GET_PROFILE_ERROR:
      return {
        ...state,
        profile: action.profile,
      };
    case actionTypes.UPLOAD_IMAGE:
      return {
        ...state,
        profile: {
          ...state.profile,
          image: action.image,
        },
      };

    default:
      return state;
  }
};
export default profileReducer;

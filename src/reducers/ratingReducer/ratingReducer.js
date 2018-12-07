import ACTION_TYPE from '../../actions/actionTypes';

const initalState = {
};

const ratingReducer = (state = initalState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_RATING_SUCCESS:
      return {
        ...state,
        rating: action.payload,
      };
    case ACTION_TYPE.POST_RATING_SUCCESS:
      return {
        ...state,
        ratingPost: action.payload,
      };

    case ACTION_TYPE.POST_RATING_DATA:
      return {
        ...state,
        ratingPostData: action.payload,
      };

    default:
      return state;
  }
};

export default ratingReducer;

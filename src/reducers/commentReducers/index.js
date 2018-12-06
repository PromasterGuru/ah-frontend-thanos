import actionTypes from '../../actions/commentActions/actionTypes';

const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_COMMENT_DATA:
      return {
        ...state,
        commentInput: action.payload,
      };
    case actionTypes.GET_ALL_COMMENTS_SUCCESSFUL:
      return {
        ...state,
        getCommentData: action.payload,
      };
    case actionTypes.GET_ALL_COMMENTS_FAIL:
      return {
        ...state,
        getCommentError: action.payload,
      };
    case actionTypes.POST_COMMENT_SUCCESSFUL:
      return {
        ...state,
        postComment: action.payload,
      };
    case actionTypes.POST_COMMENT_FAIL:
      return {
        ...state,
        postCommentError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default commentReducer;

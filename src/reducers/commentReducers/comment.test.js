import expect from 'expect';
import commentReducer from './index';
import actionTypes from '../../actions/commentActions/actionTypes';

describe(' Testing Comment reducer', () => {
  const initialState = {};
  const FailResults = {
    results: 'Article Not Found',
  };

  test('NEW_COMMENT_DATA action', () => {
    const Inputdata = {
      comment_body: 'This is my new comment',
    };
    const action = {
      type: actionTypes.NEW_COMMENT_DATA,
      payload: Inputdata,
    };
    const expectedData = {
      ...initialState,
      commentInput: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });


  test('GET_ALL_COMMENTS_SUCCESSFUL action', () => {
    const Commentsdata = {
      results: ['This is my new comment', 'Second Comment'],
    };
    const action = {
      type: actionTypes.GET_ALL_COMMENTS_SUCCESSFUL,
      payload: Commentsdata,
    };
    const expectedData = {
      ...initialState,
      getCommentData: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('GET_ALL_COMMENTS_FAIL action', () => {
    const action = {
      type: actionTypes.GET_ALL_COMMENTS_FAIL,
      payload: FailResults,
    };
    const expectedData = {
      ...initialState,
      getCommentError: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('POST_COMMENT_SUCCESSFUL action', () => {
    const data = {
      results: 'This is my comment',
    };
    const action = {
      type: actionTypes.POST_COMMENT_SUCCESSFUL,
      payload: data,
    };
    const expectedData = {
      ...initialState,
      postComment: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });

  test('POST_COMMENT_FAIL action', () => {
    const action = {
      type: actionTypes.POST_COMMENT_FAIL,
      payload: FailResults,
    };
    const expectedData = {
      ...initialState,
      postCommentError: action.payload,
    };
    expect(commentReducer(initialState, action)).toEqual(expectedData);
  });
});

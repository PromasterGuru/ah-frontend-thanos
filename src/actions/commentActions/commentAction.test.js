import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from './actionTypes';
import {
  AllComments, CommentInput, PostComment, allCommentsFail,
  allCommentsSuccessful, postCommentFail, postCommentSuccessful,
} from './index';

const mockStore = configureMockStore([thunk]);

describe('Test Comment actions', () => {
  const failData = {
    error: 'Article Not Found',
  };

  const passData = {
    comment: 'This is my new comment',
  };

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('Get All Comments Fail Action', () => {
    expect(allCommentsFail(failData)).toEqual(expect.objectContaining({
      type: actionTypes.GET_ALL_COMMENTS_FAIL,
      payload: failData,
    }));
  });

  test('Get All Comments Successful Action', () => {
    const data = {
      results: ['First Article', 'Second Article'],
    };
    expect(allCommentsSuccessful(data)).toEqual(expect.objectContaining({
      type: actionTypes.GET_ALL_COMMENTS_SUCCESSFUL,
      payload: data,
    }));
  });

  test('Post Comment Fail Action', () => {
    expect(postCommentFail(failData)).toEqual(expect.objectContaining({
      type: actionTypes.POST_COMMENT_FAIL,
      payload: failData,
    }));
  });

  test('Post Comment Successful Action', () => {
    expect(postCommentSuccessful(passData)).toEqual(expect.objectContaining({
      type: actionTypes.POST_COMMENT_SUCCESSFUL,
      payload: passData,
    }));
  });

  test('Comment Input Action', () => {
    expect(CommentInput(passData)).toEqual(expect.objectContaining({
      type: actionTypes.NEW_COMMENT_DATA,
      payload: passData,
    }));
  });

  test('Get All Comments Pass', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/1/comments', {
      status: 200,
      responseText: {
        results: ['My Fisrt comment', 'My second Comment'],
      },
    });
    const expectedActions = [{
      payload: { results: ['My Fisrt comment', 'My second Comment'] },
      type: actionTypes.GET_ALL_COMMENTS_SUCCESSFUL,
    }];
    const store = mockStore({});

    store.dispatch(AllComments()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });

  test('Get All Comments Fail', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/2345/comments', {
      status: 400,
      responseText: {
        error: 'Article Not Found',
      },
    });
    const expectedActions = [{
      payload: { results: { error: 'Article Not Found' } },
      type: actionTypes.GET_ALL_COMMENTS_FAIL,
    }];
    const store = mockStore({});

    store.dispatch(AllComments()).catch(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });


  test('Post Comment Pass', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/1/comments', {
      status: 200,
      responseText: {
        results: { comment: 'My Fisrt comment' },
      },
    });
    const expectedActions = [{
      payload: { results: { comment: 'My Fisrt comment' } },
      type: actionTypes.POST_COMMENT_SUCCESSFUL,
    }];
    const store = mockStore({ comments: {} });

    store.dispatch(PostComment()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });

  test('Post Comment Fail', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/2345/comments', {
      status: 400,
      responseText: {
        error: 'Article Not Found',
      },
    });
    const expectedActions = [{
      payload: { results: { error: 'Article Not Found' } },
      type: actionTypes.POST_COMMENT_FAIL,
    }];
    const store = mockStore({});

    store.dispatch(PostComment()).catch(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });
});

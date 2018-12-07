import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  ratingSuccess, fetchRatingThunk, postRatingSuccess, postRating,
} from './index';
import ACTION_TYPE from '../actionTypes';

const mockStore = configureMockStore([thunk]);

describe('Login Actions tests', () => {
  const rate = { rate: 1 };
  const store = mockStore({});
  const actionTypesData = actionType => ({
    type: actionType,
    payload: rate,
  });
  beforeEach(() => {
    // import and pass your custom axios instance to this method
    moxios.install();
  });
  afterEach(() => {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
  });
  test('Successful get rating action', () => {
    expect(ratingSuccess(rate)).toEqual(expect.objectContaining(
      actionTypesData(ACTION_TYPE.GET_RATING_SUCCESS),
    ));
  });
  test('successfull post rating action', () => {
    expect(postRatingSuccess(rate)).toEqual(expect.objectContaining(
      actionTypesData(ACTION_TYPE.POST_RATING_SUCCESS),
    ));
  });
  test('get rate successfull', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/7', {
      status: 200,
      responseText: { message: 'ok' },
    });
    store.dispatch(fetchRatingThunk()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        [{
          type: ACTION_TYPE.GET_RATING_SUCCESS,
        }],
      ));
    });
  });
  test('get rate successfull', () => {
    moxios.stubRequest('https://ah-backend-thanos-staging.herokuapp.com/api/articles/7/rating', {
      status: 200,
      responseText: { message: 'ok' },
    });
    store.dispatch(postRating()).then(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(
        [{
          type: ACTION_TYPE.POST_RATING_SUCCESS,
          payload: { message: 'ok' },
        }],
      ));
    });
  });
});

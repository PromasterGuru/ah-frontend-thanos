import expect from 'expect';
import combinedReducers from './index';
import user from './userReducer';
import ratingReducer from './ratingReducer/ratingReducer';

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual({
      loginReducer: { errorMessage: '', successMessage: '', user_details: '' },
      user: { freshUser: { email: '', password: '', username: '' } },
      ratingReducer: {},
    });
  });

  it('should return the initial state for user reducer', () => {
    expect(user(undefined, {})).toEqual({
      freshUser: { email: '', password: '', username: '' },
    });
  });
  it('should return the initial state for user reducer', () => {
    expect(ratingReducer(undefined, {})).toEqual({});
  });
});

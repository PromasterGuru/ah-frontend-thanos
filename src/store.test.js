import expect from 'expect';
import store from './store';

describe('redux store', () => {
  it('contains the initial state', () => {
    expect(store.getState()).toEqual({
      article: {},
      comments: {},
      loginReducer: {
        errorMessage: '',
        successMessage: '',
        user_details: '',
      },
      user: { freshUser: { email: '', password: '', username: '' } },
    });
  });
});

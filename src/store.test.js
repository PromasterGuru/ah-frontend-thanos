import expect from 'expect';
import store from './store';

describe('redux store', () => {
  it('contains the initial state', () => {
    const freshUser = { email: '', password: '', username: '' };
    expect(store.getState()).toEqual({
      article: {},
      loginReducer: { errorMessage: '', successMessage: '', user_details: '' },
      profileReducer: {
        profile: {
          bio: '', first_name: '', image: '', last_name: '',
        },
      },
      userReducer: { freshUser },
    });
  });
});

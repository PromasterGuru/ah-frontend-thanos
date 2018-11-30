import expect from 'expect';
import combinedReducers from '..';
import article from '../articleReducer';
import userReducer from '../userReducer';
import actionTypes from '../../actions/actionTypes';


const data = {
  article: {},
  loginReducer: { errorMessage: '', successMessage: '', user_details: '' },
  socialLoginReducer: { isLoggedIn: false },
  userReducer: { freshUser: { email: '', password: '', username: '' } },
};

const userData = {
  freshUser: {
    email: '', password: '', username: '',
  },
};

describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual(data);
  });

  it('should return the initial state for user reducer', () => {
    expect(userReducer(undefined, {})).toEqual(userData);
  });

  it('should return the initial state for articles reducer', () => {
    expect(article(undefined, {})).toEqual({});
    expect(combinedReducers(undefined, {})).toEqual(data);
  });

  it('should handle SOCIAL_LOGIN', () => {
    const startAction = {
      type: actionTypes.SOCIAL_LOGIN,
    };
    expect(combinedReducers(undefined, startAction)).toEqual(data);
  });
});

describe('socialLoginReducer', () => {
  it('it should have a default state', () => {
    expect(userReducer(undefined, { type: 'unexpected' })).toEqual(userData);
  });
  it('should state on LOGIN action', () => {
    expect(
      userReducer(undefined, {
        type: actionTypes.LOGIN,
        payload: true,
      }),
    ).toEqual({
      freshUser: {
        email: '', password: '', username: '',
      },
    });
  });
});

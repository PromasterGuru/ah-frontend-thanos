import expect from 'expect';
import combinedReducers from '..';
import userReducer from '../userReducer';
import article from '../articleReducer';
import actionTypes from '../../actions/actionTypes';

const data = {
  article: {},
  loginReducer: { errorMessage: '', successMessage: '', user_details: '' },
  profileReducer: {
    profile: {
      bio: '', first_name: '', image: '', last_name: '',
    },
  },
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

  it('should handle EDIT_PROFILE', () => {
    const startAction = {
      type: actionTypes.EDIT_PROFILE,
    };
    expect(combinedReducers(undefined, startAction)).toEqual(data);
  });


  it('should return the initial state for articles reducer', () => {
    expect(article(undefined, {})).toEqual({});
  });
});

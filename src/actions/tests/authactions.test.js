import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import socialUserLogin from '../userActions';
import actionTypes from '../actionTypes';
import { socialLoginFailure, SocialLogin } from '../actionCreators';


describe('social auth actions', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));
  it('should have social login initiated with google', async () => {
    const userData = {
      user: {
        access_token: 'token',
      },
    };
    const type = [{ type: actionTypes.SOCIAL_LOGIN, payload: true }];
    socialUserLogin('/api/auth/google/', userData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual(type);
  });
  it('LOGIN Action', () => {
    const user = {
      token: 'randomtoken',
    };
    expect(SocialLogin(user)).toEqual(expect.objectContaining({
      type: actionTypes.SOCIAL_LOGIN,
    }));
  });
  it('FAILURE Action', () => {
    const user = {
      token: { results: undefined },
    };
    expect(socialLoginFailure(user)).toEqual(expect.objectContaining({
      type: actionTypes.SOCIAL_LOGIN_FAILURE,
    }));
  });
  it('UserSignin Action fail', () => {
    moxios.stubRequest('https://ah-backend-thanos-stagin-pr-48.herokuapp.com/api/auth/facebook', {
      status: 409,
      responseText: {
        token: 'randomtokensss',
      },
    });
    const expectedActions = [{
      payload: { results: undefined },
      type: actionTypes.SOCIAL_LOGIN_FAILURE,
    }];
    store.dispatch(socialUserLogin()).catch(() => {
      expect(store.getActions()).toEqual(expect.objectContaining(expectedActions));
    });
  });
});

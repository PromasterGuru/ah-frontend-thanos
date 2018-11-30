import actionTypes from './actionTypes';

export const SocialLogin = response => ({
  type: actionTypes.SOCIAL_LOGIN,
  payload: response,
});
export const LogIn = payload => ({
  type: actionTypes.LOGIN,
  payload,
});
export const socialLoginFailure = response => ({
  type: actionTypes.SOCIAL_LOGIN_FAILURE,
  payload: response,
});
export const testt = () => ({
  type: actionTypes.TEST,
  payload: 'test',
});

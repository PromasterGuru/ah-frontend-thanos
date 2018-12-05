import moxios from 'moxios';
import actionTypes from '../actionTypes';
import { getProfile } from '../actionCreators';

describe('Test Profile actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('get/view Profile Action', () => {
    const profile = {
      username: 'rachaelminani',
    };
    expect(getProfile(profile)).toEqual(expect.objectContaining({
      type: actionTypes.GET_PROFILE_SUCCESS,
      payload: profile,
    }));
  });
});

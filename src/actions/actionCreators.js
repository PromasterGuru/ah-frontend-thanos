import actionTypes from './actionTypes';

export const getProfile = profile => (
  {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: profile,
  }
);

export const getProfileError = response => ({
  type: actionTypes.GET_PROFILE_ERROR,
  payload: response,
});

export const editProfile = profile => ({
  type: actionTypes.EDIT_PROFILE,
  payload: profile,
});

export const uploadImage = image => ({
  type: actionTypes.UPLOAD_IMAGE,
  image,
});

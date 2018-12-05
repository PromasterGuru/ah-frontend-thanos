import axios from 'axios';
import swal from 'sweetalert2';
// import axiosInstance from '../commons/axiosInstance';
import { getProfile, getProfileError, editProfile } from './actionCreators';

export const getProfileAction = () => (dispatch) => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  axios.defaults.headers.common.Authorization = `Token ${token}`;
  return axios.get(`https://ah-backend-thanos-staging.herokuapp.com/api/profiles/${username}`, token)
    .then((response) => {
      dispatch(getProfile(response.data.results));
    })
    .catch((error) => {
      dispatch(getProfileError({
        results: error.response.data.results,
        status_code: error.response.status,
      }));
      swal({
        title: 'Sorry this username doesnt exist',
        type: 'error',
        confirmButtonText: 'Try Again',
      });
    });
};

export const editProfileAction = profile => (dispatch, getState) => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const profile = { profiles: getState().profileReducer.profile };
  console.log(profile, 'THIS IS IT');

  axios.defaults.headers.common.Authorization = `Token ${token}`;
  return axios.put(`https://ah-backend-thanos-staging.herokuapp.com/api/profiles/${username}`, profile)
    .then(response => dispatch(editProfile(response.data.results)))

    .catch((error) => {
      swal({
        title: 'Sorry this username doesnt exist',
        type: 'error',
        confirmButtonText: 'Try Again',
      });
      return dispatch(getProfileError({
        results: error.response,
        // status_code: error.response.status,
      }));
    });
};

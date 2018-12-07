import axios from 'axios';
import swal from 'sweetalert2';
import alertMessage from '../../commons/alertMessage';
import ACTION_TYPE from '../actionTypes';

export const ratingSuccess = rate => ({
  type: ACTION_TYPE.GET_RATING_SUCCESS,
  payload: rate,
});

export const fetchRatingThunk = () => dispatch => axios.get('https://ah-backend-thanos-staging.herokuapp.com/api/articles/7')
  .then((response) => {
    dispatch(ratingSuccess(response.data.results));
  })
  .catch((error) => {
    swal({ ...alertMessage, text: error.response.data.results.error });
  });

export const postRatingSuccess = rate => ({
  type: ACTION_TYPE.POST_RATING_SUCCESS,
  payload: rate,
});

export const postRatingData = rate => ({
  type: ACTION_TYPE.POST_RATING_DATA,
  payload: rate,
});

export const postRating = data => (dispatch) => {
  const url = 'https://ah-backend-thanos-staging.herokuapp.com/api/articles/7/rating';
  const token = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJqdWRlZW5vIiwiZW1haWwiOiJqdWRlaW5ub0BnbWFpbC5jb20iLCJleHAiOjE1NDQ0MzU3OTR9.2_NSLMEJBTY-JZFlGwk6wS1Uor6zPLGARWEHsKZnDj0';
  const headers = {
    headers: { Authorization: token },
  };
  return axios.post(url, data, headers)
    .then((response) => {
      dispatch(postRatingSuccess(response.data));
    })
    .catch((error) => {
      swal({ ...alertMessage, text: error.response.data.results.error });
    });
};

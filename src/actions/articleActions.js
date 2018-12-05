import axios from 'axios';
import swal from 'sweetalert2';
import actionTypes from './actionTypes';
import alertMessage from '../commons/alertMessage';

export const getArticleAction = payload => ({
  type: actionTypes.GET_ARTICLE,
  payload, // entire article
});

export const getLikeStatusAction = payload => ({
  type: actionTypes.GET_LIKE_STATUS,
  payload,
});

export const getArticleThunk = articleId => (dispatch) => {
  const url = `https://ah-backend-thanos-staging.herokuapp.com/api/articles/${articleId}`;
  return axios.get(url)
    .then((response) => {
      dispatch(getArticleAction(response.data.results));
    })
    .catch((error) => {
      if (error.response) {
        swal({ ...alertMessage, text: error.response.data.results.error });
      }
    });
};

export const getLikeStatusThunk = likeObj => (dispatch) => {
  const { articleId, token } = likeObj;
  const url = `https://ah-backend-thanos-staging.herokuapp.com/api/articles/${articleId}/like_status`;
  return axios.get(url, { headers: { Authorization: `Token ${token}` } })
    .then((response) => {
      dispatch(getLikeStatusAction(response.data.results));
    });
};

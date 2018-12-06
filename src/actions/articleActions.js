import axios from 'axios';
import ACTION_TYPE from './actionTypes';

export const fetchArticlesSuccess = articles => ({
  type: ACTION_TYPE.FETCH_ARTICLES_SUCCESS,
  articles,
});

export const fetchArticlesFailure = errorMessage => ({
  type: ACTION_TYPE.FETCH_ARTICLES_FAILURE,
  errorMessage,
});

const fetchArticlesThunk = () => (dispatch) => {
  return axios.get('https://ah-backend-thanos-staging.herokuapp.com/api/articles')
    .then((response) => {
    //   console.log(response.data.results);
      dispatch(fetchArticlesSuccess(response.data.results));
    })
    .catch(() => {
      dispatch(fetchArticlesFailure('Check your internet conectivity'));
    });
};

export default fetchArticlesThunk;

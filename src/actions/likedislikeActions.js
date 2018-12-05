import axios from 'axios';
import actionTypes from './actionTypes';

export const likeDislikeArticleAction = payload => ({
  type: actionTypes.LIKEDISLIKE_ARTICLE,
  payload,
});

export const likeDislikeArticleThunk = likeObj => (dispatch) => {
  const { articleId, likeDislikeStatus, token } = likeObj;
  if (likeDislikeStatus) { // if a user has liked/disliked this article before
    return axios.put(
      `https://ah-backend-thanos-staging.herokuapp.com/api/articles/${articleId}/like_status`,
      likeObj,
      { headers: { Authorization: `Token ${token}` } },
    )
      .then((response) => {
        dispatch(likeDislikeArticleAction({
          results: response.data.results,
          likeStatus: likeObj.like_status,
        }));
      });
  }
  return axios.post(
    `https://ah-backend-thanos-staging.herokuapp.com/api/articles/${articleId}/like_status`,
    likeObj,
    { headers: { Authorization: `Token ${token}` } },
  )
    .then((response) => {
      dispatch(likeDislikeArticleAction({
        results: response.data.results,
        likeStatus: likeObj.like_status,
      }));
    });
};

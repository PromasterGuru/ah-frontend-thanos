import axios from 'axios';
import action from './actionTypes';

export const allCommentsSuccessful = data => ({
  type: action.GET_ALL_COMMENTS_SUCCESSFUL,
  payload: data,
});

export const allCommentsFail = data => ({
  type: action.GET_ALL_COMMENTS_FAIL,
  payload: data,
});

export const CommentInput = data => ({
  type: action.NEW_COMMENT_DATA,
  payload: data,
});

export const postCommentSuccessful = data => ({
  type: action.POST_COMMENT_SUCCESSFUL,
  payload: data,
});

export const postCommentFail = data => ({
  type: action.POST_COMMENT_FAIL,
  payload: data,
});

const url = 'https://ah-backend-thanos-staging.herokuapp.com/api/articles/12/comments';

export const AllComments = () => dispatch => axios.get(url)
  .then((response) => {
    dispatch(allCommentsSuccessful(response.data));
  })
  .catch((error) => {
    dispatch(allCommentsFail(error.response));
  });


export const PostComment = data => (dispatch) => {
  const token = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJTdWxhaW1hbiBLYXlpenppIiwiZW1haWwiOiJzdWxhaW1hbi5rYXlpenppQGFuZGVsYS5jb20iLCJleHAiOjE1NDQyMDY0MDF9.FK4Kk4xbZ3bJrlm-0NVCj9hvc1N9QxKX5fEs_Gmsfdk';
  const headers = {
    headers: {
      Authorization: token,
    },
  };
  return axios.post(url, data, headers)
    .then((response) => {
      dispatch(postCommentSuccessful(response.data));
    })
    .catch((error) => {
      dispatch(postCommentFail(error.response));
    });
};

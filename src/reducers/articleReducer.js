// handle all actions pertaining to the article (create, read, ...)
import actionTypes from '../actions/actionTypes';

const initialState = {
  article: {
    id: 0,
    tag_list: [],
    slug: '',
    title: '',
    description: '',
    body: '',
    created_at: '',
    updated_at: '',
    image_url: '',
    audio_url: '',
    read_time: '',
    likes: 0,
    dislikes: 0,
    likeDislikeStatus: '',
    views_count: '',
    rating: 0,
    author: {
      id: 0,
      username: '',
      email: '',
    },
  },
};

const articleReducer = (state = initialState, action) => {
  const { article } = state;

  switch (action.type) {
    case actionTypes.LIKEDISLIKE_ARTICLE:
      if (action.payload.likeStatus === 'like') {
        return {
          ...state,
          article: {
            ...article,
            likes: article.likeDislikeStatus === 'like' ? article.likes : article.likes + 1,
            dislikes: article.likeDislikeStatus === 'like' ? article.dislikes : article.dislikes - 1,
            likeDislikeStatus: 'like',
          },
        };
      }
      return {
        ...state,
        article: {
          ...article,
          likes: article.likeDislikeStatus === 'dislike' ? article.likes : article.likes - 1,
          dislikes: article.likeDislikeStatus === 'dislike' ? article.dislikes : article.dislikes + 1,
          likeDislikeStatus: 'dislike',
        },
      };
    case actionTypes.GET_ARTICLE:
      return {
        ...state,
        // the online version has no likeDislikeStatus field so spread both
        article: {
          ...article,
          ...action.payload,
        },
      };
    case actionTypes.GET_LIKE_STATUS:
      if (action.payload[0].like_status) { // has 1 array with all details
        return {
          ...state,
          article: {
            ...article,
            likeDislikeStatus: action.payload[0].like_status,
          },
        };
      }
      return {
        ...state,
        article: {
          ...article,
          likeDislikeStatus: '',
        },
      };
    default:
      return state;
  }
};

export default articleReducer;

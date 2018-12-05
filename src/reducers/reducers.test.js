import expect from 'expect';
import combinedReducers from './index';
import actionTypes from '../actions/actionTypes';

describe('post reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      articleReducer: {
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
      },
      userReducer: {},
    };
  });

  it('should return the initial state', () => {
    expect(combinedReducers(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_POST_START', () => {
    const startAction = {
      type: actionTypes.USER_REGISTRATION,
    };
    expect(combinedReducers({}, startAction)).toEqual(initialState);
  });
});

import expect from 'expect';
import store from './store';

describe('redux store', () => {
  it('contains the initial state', () => {
    const initialState = {
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
    expect(store.getState()).toEqual(initialState);
  });
});

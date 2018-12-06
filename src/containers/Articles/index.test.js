import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Articles from './index';
import ArticleDisplay from '../../components/Articles';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<Articles />', () => {
  let articlesComponent;

  beforeEach(() => {
    const store = mockStore({ data: { articleReducer: { articles: [] } } });
    articlesComponent = mount(
      <Provider store={store}>
        <Articles data={jest.fn} dispatch={store.dispatch} match={jest.fn} />
      </Provider>
    );
  });

  it('should render the Articles component', () => {
    expect(articlesComponent).toMatchSnapshot();
  });
});

let store;
describe('', () => {
  store = mockStore({});
  it('should render the ArticleDisplay component', () => {
    mount(
      <Provider store={store}>
        <ArticleDisplay
          article={
            ({ body: { slice: jest.fn } }, { image_url: '' }, { title: '' })
          }
        />
      </Provider>
    );
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import RatingPageConnected, { mapDispatchToProps } from './index';


describe('<RatingPage />', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    rating: {},
  };
  const store = mockStore(initialState);
  const RatingPageComponent = shallow(<RatingPageConnected article={jest.fn()} store={store} />);
  it('should render the component', () => {
    expect(RatingPageComponent).toMatchSnapshot();
  });

  it('should dispatch a method to get user input', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).ratingData({});
    mapDispatchToProps(dispatch).ratingArticle({});
    mapDispatchToProps(dispatch).getRatingArticle({});
  });
});

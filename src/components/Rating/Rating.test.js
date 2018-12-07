import React from 'react';
import { shallow } from 'enzyme';
import { RatingDisplay, Rating } from './index';

describe('<RatingDisplay />', () => {
  test('renders the component', () => {
    const RatingDisplayComponent = shallow(
      <RatingDisplay
        article={{ rating: '' }}
        onChange={jest.fn()}
      />,
    );
    expect(RatingDisplayComponent).toMatchSnapshot();
  });
});

describe('<Rating />', () => {
  test('renders the component', () => {
    const RatingComponent = shallow(
      <Rating
        onChange={jest.fn()}
        onSubmit={jest.fn()}
      />,
    );
    expect(RatingComponent).toMatchSnapshot();
  });
});

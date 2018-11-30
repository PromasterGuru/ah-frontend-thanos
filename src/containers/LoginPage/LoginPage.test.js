import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Login';

describe('<Login />', () => {
  test('renders the component', () => {
    const LoginComponent = shallow(<Login onChange={jest.fn()} onSubmit={jest.fn()} />);
    expect(LoginComponent).toMatchSnapshot();
  });
});

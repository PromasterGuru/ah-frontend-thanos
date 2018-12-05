import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { EditProfilePage } from '../editProfile';
import EditProfile from '../../../components/Profile/editProfile';

Enzyme.configure({ adapter: new Adapter() });
const storeFake = state => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('profile container', () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();
    const store = storeFake({ profile: { username: 'test' } });

    wrapper = mount(
      <Provider store={store}>
        <EditProfilePage />
      </Provider>,
    );

    container = wrapper.find(EditProfilePage);
    component = wrapper.find(EditProfile);
  });

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

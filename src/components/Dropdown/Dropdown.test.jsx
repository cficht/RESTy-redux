import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Dropdown component', () => {
  it('renders Dropdown', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Dropdown />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Dropdown component', () => {
  it('renders Dropdown', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Dropdown 
          auth="none"
          username="chris"
          password="admin"
          token="232fsdfdsf"
          handleChange={() => {}}/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

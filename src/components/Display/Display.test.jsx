import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

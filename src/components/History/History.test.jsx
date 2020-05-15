import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { Provider } from 'react-redux';
import store from '../../store';

describe('History component', () => {
  it('renders History', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <History />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

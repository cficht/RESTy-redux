import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Header component', () => {
  it('renders Header', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

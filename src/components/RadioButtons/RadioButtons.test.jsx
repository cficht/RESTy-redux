import React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from './RadioButtons';
import { Provider } from 'react-redux';
import store from '../../store';

describe('RadioButtons component', () => {
  it('renders RadioButtons', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <RadioButtons />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

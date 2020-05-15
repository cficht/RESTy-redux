import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';
import { Provider } from 'react-redux';
import store from '../../store';

describe('HistoryItem component', () => {
  it('renders HistoryItem', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HistoryItem />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

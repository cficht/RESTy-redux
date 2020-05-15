import { setInput } from '../actions/formActions';
import reducer from './formReducer';

describe('formReducer testing', () => {
  it('handles setting input state', () => {
    const state = {
      url: '',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    };
    const target = {
      name: 'url',
      value: 'as'
    };
    const action = setInput({ target });
    const newState = reducer(state, action);
    expect(newState).toEqual({
      url: 'as',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    });
  });
});

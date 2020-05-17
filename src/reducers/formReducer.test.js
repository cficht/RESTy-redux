import { setInput, setResponse, loadRequests, setRequest } from '../actions/formActions';
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

  it('handles setting response state', () => {
    const state = {
      response: {}
    };
    const action = setResponse('api.com', 'GET', null, {});
    const newState = reducer(state, action);
    expect(newState).toEqual({
      response: {}
    });
  });

  it('handles loading requests state', () => {
    const state = {
      requests: []
    };
    const action = loadRequests();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      requests: []
    });
  });

  it('handles setting input values from a saved request state', () => {
    const state = {
      url: '',
      method: '',
      body: '',
      auth: 'none',
      username: '',
      password: '',
      token: ''
    };
    const action = setRequest({
      url: 'api.com',
      method: 'GET',
      body: '{ "json": "object" }',
      auth: 'basic',
      username: 'chris',
      password: 'admin',
      token: ''
    });
    const newState = reducer(state, action);
    expect(newState).toEqual({
      url: 'api.com',
      method: 'GET',
      body: '{ "json": "object" }',
      auth: 'basic',
      username: 'chris',
      password: 'admin',
      token: ''
    });
  });
});

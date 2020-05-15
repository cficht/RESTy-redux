import { getUrl, getMethod, getBody, getAuth, getUsername, getPassword, getToken } from './formSelectors';


describe('formActions testing', () => {
  it('gets a url', () => {
    const state = {
      form: {
        url: 'api.com',
        method: '',
        body: '',
        auth: 'none',
        username: '',
        password: '',
        token: ''
      }
    };
    const url = getUrl(state);
    expect(url).toEqual('api.com');
  });
  it('gets a method', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '',
        auth: 'none',
        username: '',
        password: '',
        token: ''
      }
    };
    const method = getMethod(state);
    expect(method).toEqual('GET');
  });
  it('gets a body', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '{ "json": "object" }',
        auth: 'none',
        username: '',
        password: '',
        token: ''
      }
    };
    const body = getBody(state);
    expect(body).toEqual('{ "json": "object" }');
  });
  it('gets the auth type', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '{ "json": "object" }',
        auth: 'basic',
        username: '',
        password: '',
        token: ''
      }
    };
    const auth = getAuth(state);
    expect(auth).toEqual('basic');
  });
  it('gets a username', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '{ "json": "object" }',
        auth: 'basic',
        username: 'chris',
        password: '',
        token: ''
      }
    };
    const username = getUsername(state);
    expect(username).toEqual('chris');
  });
  it('gets a password', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '{ "json": "object" }',
        auth: 'basic',
        username: 'chris',
        password: 'admin',
        token: ''
      }
    };
    const password = getPassword(state);
    expect(password).toEqual('admin');
  });
  it('gets a token', () => {
    const state = {
      form: {
        url: 'api.com',
        method: 'GET',
        body: '{ "json": "object" }',
        auth: 'basic',
        username: 'chris',
        password: '',
        token: 'asd2343jikh234g234'
      }
    };
    const token = getToken(state);
    expect(token).toEqual('asd2343jikh234g234');
  });
});

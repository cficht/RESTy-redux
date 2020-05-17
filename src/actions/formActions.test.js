import { setInput, SET_INPUT, loadRequests, LOAD_REQUESTS, setRequest, SET_REQUEST } from './formActions';

describe('formActions testing', () => {
  it('creates a set input action', () => {
    const target = '<input type="text" placeholder="Enter URL" name="url" value="as">';
    const action = setInput({ target });
    expect(action).toEqual({
      type: SET_INPUT,
      payload: '<input type="text" placeholder="Enter URL" name="url" value="as">'
    });
  });

  it('creates a load requests action', () => {
    const action = loadRequests();
    expect(action).toEqual({
      type: LOAD_REQUESTS,
      payload: []
    });
  });

  it('creates a set request action', () => {
    const action = setRequest({ url: 'api.com' });
    expect(action).toEqual({
      type: SET_REQUEST,
      payload: { url: 'api.com' }
    });
  });
});

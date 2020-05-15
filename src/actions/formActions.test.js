import { setInput, SET_INPUT } from './formActions';

describe('formActions testing', () => {
  it('creates a set input action', () => {
    const target = '<input type="text" placeholder="Enter URL" name="url" value="as">';
    const action = setInput({ target });
    expect(action).toEqual({
      type: SET_INPUT,
      payload: '<input type="text" placeholder="Enter URL" name="url" value="as">'
    });
  });

});

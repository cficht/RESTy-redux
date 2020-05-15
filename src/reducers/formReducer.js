import { SET_INPUT, SET_RESPONSE } from '../actions/formActions';

const initialState = {
  url: '',
  method: '',
  body: '',
  auth: 'none',
  username: '',
  password: '',
  token: '',
  response: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_INPUT:
      state[action.payload.name] = action.payload.value;
      return state;
    case SET_RESPONSE:
      state.response = action.payload;
      return state;
    default:
      return state;
  }
}

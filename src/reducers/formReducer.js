import { SET_INPUT } from '../actions/formActions';

const initialState = {
  url: '',
  method: '',
  body: '',
  auth: 'none',
  username: '',
  password: '',
  token: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_INPUT:
      state[action.payload.name] = action.payload.value;
      return state;
    default:
      return state;
  }
}

import { SET_INPUT, SET_RESPONSE } from '../actions/formActions';

const initialState = {
  url: '',
  method: '',
  body: '',
  auth: 'none',
  username: '',
  password: '',
  token: '',
  response: {},
  requests: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_INPUT:
      state[action.payload.name] = action.payload.value;
      return state;
    case SET_RESPONSE:
      if(action.payload.ok) {       
        const newRequest = {
          url: state.url,
          method: state.method,
          body: state.body,
          auth: state.auth,
          username: state.username,
          password: state.password,
          token: state.token
        };  
        const match = state.requests.find(request => JSON.stringify(newRequest) === JSON.stringify(request));
        if(!match) state.requests = [...state.requests, newRequest];
      }
      return { ...state, response: action.payload };
    default:
      return state;
  }
}

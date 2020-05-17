import { fetchResponse } from '../services/request';

export const SET_INPUT = 'SET_INPUT';
export const setInput = ({ target }) => ({
  type: SET_INPUT,
  payload: target
});

export const SET_RESPONSE = 'SET_RESPONSE';
export const setResponse = (url, method, body, headers) => dispatch => {
  return fetchResponse(url, method, body, headers)
    .then(res => {
      dispatch({ type: SET_RESPONSE, payload: res });
    });
};

export const LOAD_REQUESTS = 'LOAD_REQUESTS';
export const loadRequests = () => {
  const savedRequests = JSON.parse(localStorage.getItem('requests'));
  return ({
    type: LOAD_REQUESTS,
    payload: savedRequests
  });
};

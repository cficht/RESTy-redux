import { useDispatch, useSelector } from 'react-redux';
import { getUrl, getMethod, getBody, getAuth, getUsername, getPassword, getToken } from '../selectors/formSelectors';
import { setInput, setResponse } from '../actions/formActions';

export const useForm = () => {
  const dispatch = useDispatch();
  const url = useSelector(getUrl);
  const method = useSelector(getMethod);
  const body = useSelector(getBody);
  const auth = useSelector(getAuth);
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const token = useSelector(getToken);

  const handleChange = (target) => {
    dispatch(setInput(target));
  };

  const handleSubmit = () => {
    event.preventDefault();
    const base64 = require('base-64');
    let headers;
    if(auth === 'basic') headers = `Basic ${base64.encode(`${username}:${password}`)}`;
    if(auth === 'bearer') headers = `Bearer ${token}`;
    dispatch(setResponse(url, method, body, headers));
  };
  

  return {
    url,
    method,
    body,
    auth,
    username,
    password,
    token,
    handleChange,
    handleSubmit
  };
};

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRequest } from '../../actions/formActions';

const HistoryItem = ({ request }) => {
  const dispatch = useDispatch();
  return (
    <li onClick={() => dispatch(setRequest(request))}>
      <h3>{request.method}</h3>
      <p>{request.url.split('/')[2]}</p>
      <p>{request.url.split('.com')[1]}</p>
    </li>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  request: PropTypes.object
};

export default HistoryItem;

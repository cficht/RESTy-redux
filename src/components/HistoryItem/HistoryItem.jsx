import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ url, method }) => {
  return (
    <li>
      <h3>{method}</h3>
      <p>{url.split('/')[2]}</p>
      <p>{url.split('.com')[1]}</p>
    </li>
  );
};

HistoryItem.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
};

export default HistoryItem;

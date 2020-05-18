import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = ({ method, handleChange }) => {
  return (
    <div>
      <label><input type="radio" name="method" value="GET" onChange={handleChange} checked={method === 'GET'}/>GET</label>
      <label><input type="radio" name="method" value="POST" onChange={handleChange} checked={method === 'POST'}/>POST</label>
      <label><input type="radio" name="method" value="PUT" onChange={handleChange} checked={method === 'PUT'}/>PUT</label>
      <label><input type="radio" name="method" value="PATCH" onChange={handleChange} checked={method === 'PATCH'}/>PATCH</label>
      <label><input type="radio" name="method" value="DELETE" onChange={handleChange} checked={method === 'DELETE'}/>DELETE</label>
    </div>
  );
};

RadioButtons.propTypes = {
  method: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default RadioButtons;

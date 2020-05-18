import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ auth, username, password, token, handleChange }) => {
  const authType = () => {
    if(auth === 'basic')
      return (
        <>
          <input type="text" name="username" value={username} onChange={handleChange} placeholder="username"></input>
          <input type="text" name="password" value={password} onChange={handleChange} placeholder="password"></input>
        </>
      );
    if(auth === 'bearer')
      return (
        <>
          <input type="text" name="token" value={token} onChange={handleChange} placeholder="token"></input>
        </>
      );
  };

  return (
    <>
      <select name="auth" value={auth} onChange={handleChange}>
        <option value="none">None</option>
        <option value="basic">Basic Auth</option>
        <option value="bearer">Bearer Token</option>
      </select>
      <div>
        {authType()}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  auth: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Dropdown;

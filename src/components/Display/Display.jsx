import React from 'react';
import ReactJson from 'react-json-view';
// import PropTypes from 'prop-types';

const Display = () => {
  return (
    <section>
      <ReactJson src='' theme="tomorrow" name="Headers"/>
      <ReactJson src='' theme="tomorrow" name="Response"/>
    </section>
  );
};

// Display.propTypes = {};

export default Display;

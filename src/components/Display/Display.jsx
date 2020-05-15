import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';
import { getResponse } from '../../selectors/formSelectors';

const Display = () => {
  const response = useSelector(getResponse);

  return (
    <section>
      <ReactJson src={response.headers} theme="tomorrow" name="Headers"/>
      <ReactJson src={response.response} theme="tomorrow" name="Response"/>
    </section>
  );
};

export default Display;

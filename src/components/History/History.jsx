import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem';
import { useSelector } from 'react-redux';
import { getRequests } from '../../selectors/formSelectors';

const History = () => {
  const requests = useSelector(getRequests);
  const requestNodes = requests.map(request => (<HistoryItem key={`${request.url}/${request.method}/${request.body}`} request={request}/>));

  return (
    <>
      <h1>HISTORY</h1>
      <ul>
        {requestNodes}
      </ul>
    </>
  );
};

export default History;

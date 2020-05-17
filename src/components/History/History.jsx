import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem';
import { useHistory } from '../../hooks/historyHooks';

const History = () => {
  const {
    requests,
    handleReset
  } = useHistory();

  const requestNodes = requests.map(request => (<HistoryItem key={`${request.url}/${request.method}/${request.body}`} request={request}/>));

  return (
    <>
      <h1>HISTORY</h1>
      <ul>
        {requestNodes}
      </ul>
      <button onClick={handleReset}>Clear</button>
    </>
  );
};

export default History;

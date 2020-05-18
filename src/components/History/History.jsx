import React from 'react';
import HistoryItem from '../HistoryItem/HistoryItem';
import { useHistory } from '../../hooks/historyHooks';
import styles from './History.css';

const History = () => {
  const {
    requests,
    handleReset
  } = useHistory();

  const requestNodes = requests.map(request => (<HistoryItem key={`${request.url}/${request.method}/${request.body}`} request={request}/>));

  return (
    <section className={styles.History}>
      <h1>History</h1>
      <ul>
        {requestNodes}
      </ul>
      <button onClick={handleReset}>Clear</button>
    </section>
  );
};

export default History;

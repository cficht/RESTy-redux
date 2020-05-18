import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Display from '../Display/Display';
import History from '../History/History';
import styles from './App.css';

export default function App() {
  return (
    <main>
      <aside className={styles.Left}>
        <History />
      </aside>
      <article className={styles.Right}>
        <Header />
        <Form />
        <Display />
      </article>
    </main>
  );
}
  

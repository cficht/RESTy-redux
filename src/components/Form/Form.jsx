import React from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Form.css';
// import PropTypes from 'prop-types';

const Form = () => {
  return (
    <section className={styles.Form}>
      <form>
        <div className={styles.Left}>
          <input type="text" placeholder="Enter URL"></input>
          <RadioButtons />
          <textarea placeholder="Enter JSON Body"></textarea>
          <button>Submit</button>
        </div>
        <div className={styles.Right}>
          <h3>Authorization</h3>
          <Dropdown />
          <p>Eventual Auth Info</p>
        </div>
      </form>
    </section>
  );
};

// Form.propTypes = {};

export default Form;

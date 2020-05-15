import React from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Form.css';
import { useForm } from '../../hooks/formHooks';

const Form = () => {
  const {
    url,
    body,
    auth,
    username,
    password,
    token,
    handleChange
  } = useForm();

  return (
    <section className={styles.Form}>
      <form>
        <div className={styles.Left}>
          <input type="text" placeholder="Enter URL" name="url" onChange={handleChange} value={url}></input>
          <RadioButtons handleChange={handleChange}/>
          <textarea placeholder="Enter JSON Body" name="body" onChange={handleChange} value={body}></textarea>
          <button>Submit</button>
        </div>
        <div className={styles.Right}>
          <h3>Authorization</h3>
          <Dropdown auth={auth} username={username} password={password} token={token} handleChange={handleChange}/>
        </div>
      </form>
    </section>
  );
};

export default Form;

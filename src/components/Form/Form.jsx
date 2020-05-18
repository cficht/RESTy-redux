import React from 'react';
import RadioButtons from '../RadioButtons/RadioButtons';
import Dropdown from '../Dropdown/Dropdown';
import styles from './Form.css';
import { useForm } from '../../hooks/formHooks';

const Form = () => {
  const {
    url,
    method,
    body,
    auth,
    username,
    password,
    token,
    disable,
    handleChange,
    handleSubmit
  } = useForm();

  return (
    <section className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.Left}>
          <input type="text" placeholder="Enter URL" name="url" onChange={handleChange} value={url}></input>
          <RadioButtons method={method} handleChange={handleChange}/>
          <textarea placeholder="Enter JSON Body" name="body" onChange={handleChange} value={body} disabled={disable}></textarea>
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

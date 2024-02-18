import React, { useState, useId } from 'react';

import styles from './register-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};
const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  // const reset = () => {
  //   setState({ name: '', email: '', password: '' });
  // };

  const { name, email, password } = state;

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor={nameId} className={styles.label}>
          Name:
        </label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor={emailId} className={styles.label}>
          Email:
        </label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
          className={styles.input}
        />
      </div>
      <div>
        <label htmlFor={passwordId} className={styles.label}>
          Password:
        </label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.submit}>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

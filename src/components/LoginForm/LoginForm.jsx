import React, { useState, useId } from 'react';

import styles from './login-form..module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};
const LoginForm = ({ onSubmit }) => {
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
    reset();
  };

  const reset = () => {
    setState({ email: '', password: '' });
  };

  const { email, password } = state;

  const emailId = useId();
  const passwordId = useId();
  return (
    <form onSubmit={handleSubmit}>
      <div className={''}>
        <label htmlFor={emailId}>Email:</label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          required
        />
      </div>
      <div className={''}>
        <label htmlFor={passwordId}>Password:</label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default LoginForm;

import React, { useState, useId } from 'react';

// import css from './register-form.module.css';

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
    reset();
  };

  const reset = () => {
    setState({ name: '', email: '', password: '' });
  };

  const { name, email, password } = state;

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  return (
    <form onSubmit={handleSubmit}>
      <div className={''}>
        <label htmlFor={nameId}>Name:</label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          required
        />
      </div>
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

export default RegisterForm;

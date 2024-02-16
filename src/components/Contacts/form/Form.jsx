import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';

import { selectContacts } from '../../../redux/selctors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-operations';
const INITIAL_STATE = {
  name: '',
  phone: '',
};
const Form = () => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact({ ...state });
  };
  const isDublicate = ({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = phone.toLowerCase();

    const dublicate = items.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentNumber = item.phone.toLowerCase();
      return (
        normalizedCurrentName === normalizedName ||
        normalizedCurrentNumber === normalizedNumber
      );
    });

    return Boolean(dublicate);
  };
  const onAddContact = data => {
    if (isDublicate(data)) {
      return alert(`Book with ${data.phone} and ${data.name} already in list`);
    }
    dispatch(addContact(data));

    reset();
  };

  const reset = () => {
    setState({ name: '', phone: '' });
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={nameInputId} className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          id={nameInputId}
          required
        />
      </label>
      <label htmlFor={numberInputId} className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          id={numberInputId}
          required
        />
      </label>

      <button type="submit" className={css.submit}>
        Add Contact
      </button>
    </form>
  );
};

export default Form;

import React from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

import css from './Contact.module.css';
export const Contact = () => {
  return (
    <div className={css.main}>
      <h1 className={css.title}>Phonebook</h1>
      <Form></Form>

      <Filter></Filter>
      <h2 className={css.title}> Contacts</h2>
      <ContactList></ContactList>
    </div>
  );
};

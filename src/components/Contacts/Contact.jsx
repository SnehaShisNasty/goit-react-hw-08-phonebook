import React from 'react';
import Form from './form/Form';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

import css from './Contact.module.css';
export const Contact = () => {
  return (
    <div className={css.main}>
      <div className={css.form_div}>
        <h1 className={css.title}>Phonebook</h1>
        <Form></Form>
      </div>

      <div className={css.contacts_div}>
        <h2 className={css.title}> Contacts</h2>
        <Filter></Filter>

        <ContactList></ContactList>
      </div>
    </div>
  );
};

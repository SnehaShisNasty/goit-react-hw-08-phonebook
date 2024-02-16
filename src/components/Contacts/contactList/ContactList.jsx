import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../../redux/selctors';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const items = useSelector(selectVisibleContacts);
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.list}>
      {error && <p>{error}</p>}
      {isLoading && <p>...Loading</p>}
      {Boolean(items.length) &&
        items.map(({ name, id, phone }) => (
          <li key={id} className={css.item}>
            {name}: {phone}
            <button onClick={() => onDeleteContact(id)} className={css.delete}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

import { useSelector, useDispatch } from 'react-redux';

import css from './ContactList.module.css';

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
import Loading from 'components/Loading/Loading';

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
      {isLoading && <Loading />}

      {Boolean(items.length) &&
        items.map(({ name, id, number }) => (
          <li key={id} className={css.item}>
            <span>
              Contact's name: <span className={css.span}>{name}</span>
            </span>
            <span>
              Contact's number:<span className={css.span}>{number}</span>
            </span>
            <button onClick={() => onDeleteContact(id)} className={css.delete}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

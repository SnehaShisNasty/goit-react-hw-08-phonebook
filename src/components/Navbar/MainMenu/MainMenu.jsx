import { NavLink } from 'react-router-dom';
import styles from './main-menu.module.css';

const NavMenu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/phonebooks">
          PhoneBook
        </NavLink>
      </li>
    </ul>
  );
};

export { NavMenu };

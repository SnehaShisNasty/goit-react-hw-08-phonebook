import { NavLink } from 'react-router-dom';

import styles from './nav-bar-auth.module.css';
export const NavBarAuth = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <NavLink className={styles.link} to="/register">
          Register
        </NavLink>
      </li>

      <li className={styles.item}>
        <NavLink className={styles.link} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

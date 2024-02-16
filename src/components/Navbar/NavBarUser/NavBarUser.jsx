import styles from './nav-bar-user.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

export const NavBarUser = () => {
  const { name } = useSelector(selectUser);
  return (
    <div className={styles.menu}>
      <span className={styles.link}>{name}</span>
      <button className={styles.link}>Log Out</button>
    </div>
  );
};

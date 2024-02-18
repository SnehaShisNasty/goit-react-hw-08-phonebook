import styles from './nav-bar-user.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
const NavBarUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.menu}>
      <span className={styles.link}>{name}</span>
      <button onClick={onLogout} className={styles.button}>
        Log Out
      </button>
    </div>
  );
};
export default NavBarUser;

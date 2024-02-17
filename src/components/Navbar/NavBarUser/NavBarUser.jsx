import styles from './nav-bar-user.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/auth-selectors';

const NavBarUser = () => {
  const { name } = useSelector(selectUser);
  // const dispatch = useDispatch();
  return (
    <div className={styles.menu}>
      <span className={styles.link}>{name}</span>
      <button className={styles.link}>Log Out</button>
    </div>
  );
};
export default NavBarUser;

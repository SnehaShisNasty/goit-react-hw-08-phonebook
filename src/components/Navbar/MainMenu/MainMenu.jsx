import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './main-menu.module.css';
import menuItems from './items';
import { selectIsLogin } from '../../../redux/auth/auth-selectors';

const NavMenu = () => {
  const isLogin = useSelector(selectIsLogin);
  const filteredMenuItems = !isLogin
    ? menuItems.filter(item => !item.private)
    : menuItems;
  const elements = filteredMenuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={styles.link} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.menu}>{elements}</ul>;
};

export { NavMenu };

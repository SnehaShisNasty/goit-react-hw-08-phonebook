import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavMenu } from './MainMenu/MainMenu';
import { NavBarAuth } from './NavBarAuth/NavBarAuth';
import { selectIsLogin } from '../../redux/auth/auth-selectors';
import styles from './nav-bar.module.css';
import NavbarUser from './NavBarUser/NavBarUser';
const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <header className={styles.menu}>
      <NavLink className={styles.logo} to="/">
        Logo
      </NavLink>
      <NavMenu></NavMenu>
      {isLogin ? <NavbarUser /> : <NavBarAuth />}
    </header>
  );
};
export { Navbar };

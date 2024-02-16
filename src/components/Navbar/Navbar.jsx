import { NavLink } from 'react-router-dom';

import { NavMenu } from './MainMenu/MainMenu';
import { NavBarAuth } from './NavBarAuth/NavBarAuth';

import styles from './nav-bar.module.css';
import { NavBarUser } from './NavBarUser/NavBarUser';
const Navbar = () => {
  const isLogin = false;
  return (
    <header className={styles.menu}>
      <NavLink className={styles.link} to="/">
        Logo
      </NavLink>
      <NavMenu></NavMenu>
      {isLogin ? <NavBarUser /> : <NavBarAuth />}
    </header>
  );
};
export { Navbar };

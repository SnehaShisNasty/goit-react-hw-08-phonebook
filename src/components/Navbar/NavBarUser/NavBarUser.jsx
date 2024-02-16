import styles from './nav-bar-user.module.css';
export const NavBarUser = () => {
  return (
    <div className={styles.menu}>
      <span className={styles.link}>Alex</span>
      <button className={styles.link}>Log Out</button>
    </div>
  );
};

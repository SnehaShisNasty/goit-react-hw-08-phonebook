import { Navbar } from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './shared-layout.module.css';
const SharedLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<p>...Loading page</p>}>
        <div className={styles.div}>
          <Outlet></Outlet>
        </div>
      </Suspense>
    </>
  );
};
export { SharedLayout };

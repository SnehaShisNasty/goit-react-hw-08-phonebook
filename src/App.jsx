import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppRoutes } from './AppRoutes.jsx';
import { current } from './redux/auth/auth-operations.js';

import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <div className={styles.App}>
      <AppRoutes />
    </div>
  );
}

export { App };

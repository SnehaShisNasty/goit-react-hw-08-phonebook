import LoginForm from '../../components/LoginForm/LoginForm';

import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import styles from './login-page.module.css';
import Loading from 'components/Loading/Loading';
const LoginPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const handleLogin = body => {
    dispatch(login(body));
  };
  if (isLogin) {
    return <Navigate to="/phonebooks" />;
  }
  return (
    <main className={styles.main}>
      {authLoading && <Loading />}
      <h1 className={styles.title}>Login Page</h1>
      <LoginForm onSubmit={handleLogin}></LoginForm>
      {authError && <p>{authError}</p>}
      <Outlet></Outlet>
    </main>
  );
};
export default LoginPage;

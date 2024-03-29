import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import styles from './register-page.module.css';
import Loading from 'components/Loading/Loading';
import ErrorMessage from 'components/Erorr/Erorr';
const RegisterPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const handleSignup = body => {
    dispatch(signup(body));
  };
  if (isLogin) {
    return <Navigate to="/phonebooks" />;
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Register Form</h1>
      {authLoading && <Loading />}
      <RegisterForm onSubmit={handleSignup}></RegisterForm>
      {authError && <ErrorMessage text={authError} />}
      <Outlet></Outlet>
    </main>
  );
};
export default RegisterPage;

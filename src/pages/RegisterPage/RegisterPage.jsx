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
    <main>
      <h1>Register Form</h1>
      {authLoading && <p>...Loding</p>}
      <RegisterForm onSubmit={handleSignup}></RegisterForm>
      {authError && <p>{authError}</p>}
      <Outlet></Outlet>
    </main>
  );
};
export default RegisterPage;

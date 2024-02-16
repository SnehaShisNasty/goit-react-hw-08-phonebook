import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    // dispatch(signup(data));
  };
  return (
    <main>
      <h1>Register Form</h1>
      <RegisterForm onSubmit={handleSignup}></RegisterForm>
      <Outlet></Outlet>
    </main>
  );
};
export default RegisterPage;

import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin, selectToken } from '../../redux/auth/auth-selectors';
import Loading from 'components/Loading/Loading';
const PrivateRoute = () => {
  const isLogin = useSelector(selectIsLogin);
  const token = useSelector(selectToken);
  if (!isLogin && token) {
    return <Loading />;
  }
  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
const PrivateRoute = ({ children }) => {
  const { userInfo } = useAuth();
  if (!userInfo) return <Navigate to='/login' />;
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

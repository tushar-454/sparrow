import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
const PublicRoute = ({ children }) => {
  const user = useAuth();
  if (user) return <Navigate to='/' />;
  return children;
};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;

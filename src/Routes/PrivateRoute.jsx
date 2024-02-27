import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children }) => {
  const user = true;
  if (!user) return <Navigate to='/login' />;
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

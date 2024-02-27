import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
const PublicRoute = ({ children }) => {
  const user = true;
  if (user) return <Navigate to='/' />;
  return children;
};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;

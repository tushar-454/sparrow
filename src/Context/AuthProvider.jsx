import PropType from 'prop-types';
import { createContext } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // const userInfo = null;
  const userInfo = {
    name: 'John Doe',
    email: 'Hey@gamil.com',
    accountType: 'Customer',
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropType.node,
};
export default AuthProvider;

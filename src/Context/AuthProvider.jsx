import PropType from 'prop-types';
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const authInfo = {
    userInfo,
    setUserInfo,
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      setUserInfo(user);
    } else {
      setUserInfo(null);
    }
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropType.node,
};
export default AuthProvider;

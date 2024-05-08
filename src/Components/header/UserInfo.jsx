import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';

const UserInfo = () => {
  const [logout, setLogout] = useState(false);
  const axios = useAxios();
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAuth();
  // handle logout function
  const handleLogout = async () => {
    // save user allready not one device login
    await axios.patch(`/user/updateUserOneDeviceLogin/${userInfo.phone}`, {
      isOneDeviceLoggedIn: false,
    });
    localStorage.clear();
    // token remove request
    await axios.post('/jwt/remove');
    toast.success('Logout successfully');
    setUserInfo(null);
    navigate('/home');
  };
  return (
    <div className='relative'>
      <div className='h-12 w-12'>
        <img
          onClick={() => setLogout(!logout)}
          src={
            userInfo?.image ??
            'https://img001.prntscr.com/file/img001/tVyVFqSNTaWsJphP1ef31A.png'
          }
          alt='user image'
          className='h-full w-full cursor-pointer rounded-full object-cover outline-4 outline-apple-900 transition-all hover:outline-double'
        />
      </div>
      {logout && (
        <div className='absolute right-0 top-20'>
          <button
            onClick={handleLogout}
            className='rounded-lg bg-red-500 px-4 py-2 font-semibold text-white'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;

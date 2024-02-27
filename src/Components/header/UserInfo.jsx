import useAuth from '../../Hook/useAuth';

const UserInfo = () => {
  const user = useAuth();
  return (
    <div>
      <div className='h-12 w-12'>
        <img
          src={
            user?.image ??
            'https://img001.prntscr.com/file/img001/tVyVFqSNTaWsJphP1ef31A.png'
          }
          alt='user image'
          className='h-full w-full cursor-pointer rounded-full object-cover outline-4 outline-apple-900 transition-all hover:outline-double'
        />
      </div>
    </div>
  );
};

export default UserInfo;

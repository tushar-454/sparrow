import PropTypes from 'prop-types';
import Tag from '../UI/Tag';
const UserInformationCard = ({ title, userInfo }) => {
  return (
    <div className='w-full rounded-lg border border-apple-500 bg-apple-50 p-5 md:w-1/2'>
      <h2 className='mb-4 text-center text-xl font-bold text-jagger-950'>
        {title ?? 'User Information'}
      </h2>
      <div>
        <div className='flex items-center gap-2'>
          <img
            src={
              userInfo?.image ??
              '	https://img001.prntscr.com/file/img001/tVyVFqSNTaWsJphP1ef31A.png'
            }
            alt='user image'
            className='h-16 w-16 rounded-full border-2 border-apple-500 object-cover'
          />
          <p className='text-lg'>
            <span className='block text-jagger-950'>
              <b>Name: </b>
              {userInfo?.name ?? 'Jesy Tem'}
            </span>
            <span className='block text-jagger-950'>
              <b>Email: </b>
              {userInfo?.email ?? 'jesytem@yehoo.com'}
            </span>
          </p>
        </div>
        <p className='mt-5 flex flex-col gap-2 sm:flex-row'>
          <Tag>{userInfo?.isActiveAccount ? 'Activated' : 'Pending'}</Tag>
          <Tag>NID: {userInfo?.nidNo ?? '048348943533'}</Tag>
        </p>
        {userInfo?.isActiveAccount || (
          <p className='mt-4'>
            <Tag>Request for Active</Tag>
          </p>
        )}
      </div>
    </div>
  );
};
UserInformationCard.propTypes = {
  userInfo: PropTypes.object.isRequired,
  title: PropTypes.string,
};
export default UserInformationCard;

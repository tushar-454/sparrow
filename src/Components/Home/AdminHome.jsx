import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useState } from 'react';
import useAxios from '../../Hook/useAxios';
import GradientText from '../Shared/GradientText';
import Input from '../UI/Input';
import BalanceInformationCard from './BalanceInformationCard';
import UserInformationCard from './UserInformationCard';
import UserTable from './UserTable';
const AdminHome = ({ user, account }) => {
  const [searchUsers, setsearchUsers] = useState(null);
  const axios = useAxios();
  const {
    data: allUsers,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const res = await axios.get(`/admin/allUsers`);
      return res.data.data;
    },
  });
  // handle search user
  const handleSearchUser = (e) => {
    const search = e.target.value;
    if (search === '') return setsearchUsers(null);
    const searchUser = allUsers.filter((user) => user.phone.includes(search));
    setsearchUsers(searchUser);
  };
  return (
    <>
      {/* user information and user balance information wrapper will be here */}
      <div className='my-10 flex flex-col justify-center gap-4 md:flex-row md:gap-10'>
        {/* user information card  */}
        <UserInformationCard title={'Admin Information'} userInfo={user} />
        {/* user balance information card */}
        <BalanceInformationCard
          title={'Admin Balance Information'}
          accountInfo={account}
        />
      </div>
      {/* all user information with tabular format  */}
      <GradientText>List of All Users</GradientText>
      {/* search function  */}
      <div className='my-5'>
        <Input
          displayName='Search by phone:'
          type='search'
          id={'search'}
          name='search'
          placeholder={'Search by phone number'}
          onChange={handleSearchUser}
        />
      </div>
      <div className='w-full overflow-auto'>
        {/* admin user management table  */}
        <UserTable
          allUsers={allUsers}
          isError={isError}
          isLoading={isLoading}
          searchUsers={searchUsers}
        />
      </div>
    </>
  );
};
AdminHome.propTypes = {
  user: PropTypes.object,
  account: PropTypes.object,
};
export default AdminHome;

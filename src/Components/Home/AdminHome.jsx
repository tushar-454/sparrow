import PropTypes from 'prop-types';
import Select from '../UI/Select';
import Tag from '../UI/Tag';
import BalanceInformationCard from './BalanceInformationCard';
import UserInformationCard from './UserInformationCard';
const AdminHome = ({ user, account }) => {
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
      <p className='mb-5 bg-gradient-to-br from-apple-500 to-jagger-950 bg-clip-text text-center text-3xl font-bold text-transparent'>
        List of All Users
      </p>
      <div className='w-full overflow-auto'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gradient-to-tr from-apple-600 to-jagger-600 text-white'>
              <th className='text-nowrap border border-apple-400 p-2'>Name</th>
              <th className='text-nowrap border border-apple-400 p-2'>Email</th>
              <th className='text-nowrap border border-apple-400 p-2'>Role</th>
              <th className='text-nowrap border border-apple-400 p-2'>
                Status
              </th>
              <th className='text-nowrap border border-apple-400 p-2'>
                Money Request
              </th>
              <th className='text-nowrap border border-apple-400 p-2'>
                Withdraw Request
              </th>
              <th className='text-nowrap border border-apple-400 p-2'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ]?.map((user, index) => (
              <tr key={index} className='transition-all hover:bg-green-50'>
                <td className='text-nowrap border p-2'>John Doe</td>
                <td className='text-nowrap border p-2'>Jhondou@gmail.com</td>
                <td className='text-nowrap border p-2'>Admin</td>
                <td className='text-nowrap border p-2 text-center'>
                  <Select style={{ minWidth: '8rem' }}>
                    <option value='Pending' className='text-nowrap'>
                      Pending
                    </option>
                    <option value='Active' className='text-nowrap'>
                      Active
                    </option>
                    <option value='Block' className='text-nowrap'>
                      Block
                    </option>
                  </Select>
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  <Tag>Pending</Tag>
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  <Tag>Pending</Tag>
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  <Tag style={{ background: '#FF0000' }}>Delete</Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
AdminHome.propTypes = {
  user: PropTypes.object,
  account: PropTypes.object,
};
export default AdminHome;

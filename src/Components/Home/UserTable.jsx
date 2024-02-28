import PropTypes from 'prop-types';
import Select from '../UI/Select';
import Tag from '../UI/Tag';

const UserTable = ({ allUsers, isError, isLoading, searchUsers }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='bg-gradient-to-tr from-apple-600 to-jagger-600 text-white'>
          <th className='text-nowrap border border-apple-400 p-2'>Name</th>
          <th className='text-nowrap border border-apple-400 p-2'>Email</th>
          <th className='text-nowrap border border-apple-400 p-2'>Role</th>
          <th className='text-nowrap border border-apple-400 p-2'>Phone</th>
          <th className='text-nowrap border border-apple-400 p-2'>Status</th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Money Request
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Withdraw Request
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>Action</th>
        </tr>
      </thead>
      <tbody>
        {!searchUsers ? (
          <>
            {!isError &&
              !isLoading &&
              allUsers?.map((user, index) => (
                <tr key={index} className='transition-all hover:bg-green-50'>
                  <td className='text-nowrap border p-2'>{user?.name}</td>
                  <td className='text-nowrap border p-2'>{user?.email}</td>
                  <td className='text-nowrap border p-2'>{user?.role}</td>
                  <td className='text-nowrap border p-2'>{user?.phone}</td>
                  <td className='text-nowrap border p-2 text-center'>
                    <Select style={{ minWidth: '8rem' }}>
                      <option
                        selected={user?.isActiveAccount === true}
                        value='Active'
                        className='text-nowrap'
                      >
                        Active
                      </option>
                      <option
                        selected={user?.isActiveAccount === false}
                        value='Block'
                        className='text-nowrap'
                      >
                        Block
                      </option>
                    </Select>
                  </td>
                  <td className='text-nowrap border p-2 text-center'>
                    {user?.isBalanceRequest ? (
                      <Tag>Requested</Tag>
                    ) : (
                      <Tag>None</Tag>
                    )}
                  </td>
                  <td className='text-nowrap border p-2 text-center'>
                    {user?.isWithdrawRequest ? (
                      <Tag>Requested</Tag>
                    ) : (
                      <Tag>None</Tag>
                    )}
                  </td>
                  <td className='text-nowrap border p-2 text-center'>
                    <Tag style={{ background: '#FF0000' }}>Delete</Tag>
                  </td>
                </tr>
              ))}
          </>
        ) : (
          <>
            {searchUsers?.map((user, index) => (
              <tr key={index} className='transition-all hover:bg-green-50'>
                <td className='text-nowrap border p-2'>{user?.name}</td>
                <td className='text-nowrap border p-2'>{user?.email}</td>
                <td className='text-nowrap border p-2'>{user?.role}</td>
                <td className='text-nowrap border p-2'>{user?.phone}</td>
                <td className='text-nowrap border p-2 text-center'>
                  <Select style={{ minWidth: '8rem' }}>
                    <option
                      selected={user?.isActiveAccount === true}
                      value='Active'
                      className='text-nowrap'
                    >
                      Active
                    </option>
                    <option
                      selected={user?.isActiveAccount === false}
                      value='Block'
                      className='text-nowrap'
                    >
                      Block
                    </option>
                  </Select>
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  {user?.isBalanceRequest ? (
                    <Tag>Requested</Tag>
                  ) : (
                    <Tag>None</Tag>
                  )}
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  {user?.isWithdrawRequest ? (
                    <Tag>Requested</Tag>
                  ) : (
                    <Tag>None</Tag>
                  )}
                </td>
                <td className='text-nowrap border p-2 text-center'>
                  <Tag style={{ background: '#FF0000' }}>Delete</Tag>
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};
UserTable.propTypes = {
  allUsers: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchUsers: PropTypes.func.isRequired,
};
export default UserTable;

import PropTypes from 'prop-types';
import { paymentServices, userServices } from '../../Database/Services';
import BalanceInformationCard from './BalanceInformationCard';
import Features from './Features';
import UserInformationCard from './UserInformationCard';
const UserHome = ({ user, account, accountRefetch }) => {
  return (
    <>
      {/* user information and user balance information wrapper will be here */}
      <div className='my-10 flex flex-col justify-center gap-4 md:flex-row md:gap-10'>
        {/* user information card  */}
        <UserInformationCard title={'User Information'} userInfo={user} />
        {/* user balance information card */}
        <BalanceInformationCard
          title={'User Balance Information'}
          accountInfo={account}
        />
      </div>
      {/* feature link based on user role  */}
      <div className='w-full rounded-lg border border-apple-500 bg-apple-50 p-5'>
        <Features
          title={'Services'}
          features={userServices}
          accountRefetch={accountRefetch}
        />
        <Features title={'Payments'} features={paymentServices} />
      </div>
    </>
  );
};
UserHome.propTypes = {
  user: PropTypes.object,
  account: PropTypes.object,
  accountRefetch: PropTypes.func,
};
export default UserHome;

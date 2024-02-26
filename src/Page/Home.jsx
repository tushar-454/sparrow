import BalanceInformationCard from '../Components/Home/BalanceInformationCard';
import Features from '../Components/Home/Features';
import UserInformationCard from '../Components/Home/UserInformationCard';
import Container from '../Components/Shared/Container';
import { paymentServices, userServices } from '../Database/Services';
const Home = () => {
  const user = {};
  const account = {};
  return (
    <main className='mb-10'>
      <Container>
        <h1 className='mt-8 bg-gradient-to-br from-apple-500 to-jagger-950 bg-clip-text text-center text-5xl font-bold text-transparent'>
          Welcome to Sparrow!
        </h1>
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
          <Features title={'Services'} features={userServices} />
          <Features title={'Payments'} features={paymentServices} />
        </div>
      </Container>
    </main>
  );
};

export default Home;

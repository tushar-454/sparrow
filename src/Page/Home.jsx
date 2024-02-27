import AdminHome from '../Components/Home/AdminHome';
import AgentHome from '../Components/Home/AgentHome';
import CustomerHome from '../Components/Home/CustomerHome';
import Container from '../Components/Shared/Container';
import GradientText from '../Components/Shared/GradientText';
const Home = () => {
  const user = { accountType: 'Customer' };
  const account = {};
  return (
    <main className='mb-10'>
      <Container>
        <GradientText isHead={true}>Welcome to Sparrow!</GradientText>
        {user?.accountType === 'Admin' && (
          <AdminHome user={user} account={account} />
        )}
        {user?.accountType === 'Customer' && (
          <CustomerHome user={user} account={account} />
        )}
        {user?.accountType === 'Agent' && (
          <AgentHome user={user} account={account} />
        )}
      </Container>
    </main>
  );
};

export default Home;

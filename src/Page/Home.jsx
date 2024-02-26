import AdminHome from '../Components/Home/AdminHome';
import AgentHome from '../Components/Home/AgentHome';
import CustomerHome from '../Components/Home/CustomerHome';
import Container from '../Components/Shared/Container';
const Home = () => {
  const user = { accountType: 'Admin' };
  const account = {};
  return (
    <main className='mb-10'>
      <Container>
        <h1 className='mt-8 bg-gradient-to-br from-apple-500 to-jagger-950 bg-clip-text text-center text-5xl font-bold text-transparent'>
          Welcome to Sparrow!
        </h1>
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

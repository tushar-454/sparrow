import { useQuery } from '@tanstack/react-query';
import AdminHome from '../Components/Home/AdminHome';
import AgentHome from '../Components/Home/AgentHome';
import CustomerHome from '../Components/Home/CustomerHome';
import Container from '../Components/Shared/Container';
import GradientText from '../Components/Shared/GradientText';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
const Home = () => {
  const { userInfo } = useAuth();
  const axios = useAxios();
  const {
    data: account,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['account'],
    queryFn: async () => {
      const res = await axios.get(`/user/account/${userInfo?.phone}`);
      return res.data.data;
    },
  });
  return (
    <main className='mb-10'>
      <Container>
        <GradientText isHead={true}>Welcome to Sparrow!</GradientText>
        {userInfo?.role === 'Admin' && (
          <AdminHome
            user={userInfo}
            account={!isError && !isLoading && account}
          />
        )}
        {userInfo?.role === 'Customer' && (
          <CustomerHome
            user={userInfo}
            account={!isError && !isLoading && account}
          />
        )}
        {userInfo?.role === 'Agent' && (
          <AgentHome
            user={userInfo}
            account={!isError && !isLoading && account}
          />
        )}
      </Container>
    </main>
  );
};

export default Home;

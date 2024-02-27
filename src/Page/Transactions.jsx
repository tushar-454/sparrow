import Container from '../Components/Shared/Container';
import GradientText from '../Components/Shared/GradientText';
import TransactionTable from '../Components/Transactions/TransactionTable';

const Transactions = () => {
  return (
    <main>
      <Container>
        <GradientText>Transactions</GradientText>
        <div className='my-5 w-full overflow-auto'>
          <TransactionTable />
        </div>
      </Container>
    </main>
  );
};

export default Transactions;

import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';

const TransactionTable = () => {
  const axios = useAxios();
  const { userInfo } = useAuth();
  const {
    data: transactions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      // if user admin then fetch all transactions
      if (userInfo?.role === 'Admin') {
        const res = await axios.get(`/transactions/all`);
        return res.data.data;
      }
      const res = await axios.get(`/transactions/${userInfo?.phone}`);
      return res.data.data;
    },
  });

  return (
    <table className='w-full'>
      <thead>
        <tr className='bg-gradient-to-tr from-apple-600 to-jagger-600 text-white'>
          <th className='text-nowrap border border-apple-400 p-2'>
            Sender Name
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Sender Phone
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>Amount</th>
          <th className='text-nowrap border border-apple-400 p-2'>Type</th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Receiver Name
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Receiver Phone
          </th>
          <th className='text-nowrap border border-apple-400 p-2'>Time</th>
          <th className='text-nowrap border border-apple-400 p-2'>
            Reference/Note
          </th>
        </tr>
      </thead>
      <tbody>
        {!isError &&
          !isLoading &&
          transactions?.map((transaction, index) => (
            <tr key={index} className='transition-all hover:bg-green-50'>
              <td className='text-nowrap border p-2'>
                {transaction?.senderName}
              </td>
              <td className='text-nowrap border p-2'>
                {transaction?.senderNumber}
              </td>
              <td className='text-nowrap border p-2'>{transaction?.amount}</td>
              <td className='text-nowrap border p-2'>{transaction?.type}</td>
              <td className='text-nowrap border p-2'>
                {transaction?.receiverName}
              </td>
              <td className='text-nowrap border p-2'>
                {transaction?.receiverNumber}
              </td>
              <td className='text-nowrap border p-2'>
                {new Date(transaction?.time).toLocaleString()}
              </td>
              <td className='text-nowrap border p-2'>
                {transaction?.wishText ?? 'No note'}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;

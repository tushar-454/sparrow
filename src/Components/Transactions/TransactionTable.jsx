const TransactionTable = () => {
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
        </tr>
      </thead>
      <tbody>
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]?.map(
          (user, index) => (
            <tr key={index} className='transition-all hover:bg-green-50'>
              <td className='text-nowrap border p-2'>John Doe</td>
              <td className='text-nowrap border p-2'>+03493054</td>
              <td className='text-nowrap border p-2'>23400</td>
              <td className='text-nowrap border p-2'>CashIn</td>
              <td className='text-nowrap border p-2'>Er Eps</td>
              <td className='text-nowrap border p-2'>+03493054</td>
              <td className='text-nowrap border p-2'>12-12-2021 12:12:12</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default TransactionTable;

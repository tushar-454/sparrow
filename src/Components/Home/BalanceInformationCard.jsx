import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import Tag from '../UI/Tag';

const BalanceInformationCard = ({ title, accountInfo }) => {
  const [blur, setBlur] = useState(true);
  return (
    <div
      onMouseLeave={() => setBlur(true)}
      className='w-full rounded-lg border border-apple-500 bg-apple-50 p-5 md:w-1/2'
    >
      <h2 className='mb-4 text-center text-xl font-bold text-jagger-950'>
        {title ?? 'Balance Information'}
      </h2>
      <div>
        <p className='flex items-center gap-3 text-lg'>
          <span className='text-jagger-950'>
            <b className='flex'>
              <PiCurrencyCircleDollarFill className='text-2xl' /> Balance:
            </b>
          </span>
          <span
            className={`cursor-pointer transition-all duration-700 ${
              blur ? 'blur-sm' : 'blur-0'
            }`}
            onClick={() => setBlur(!blur)}
          >
            {accountInfo?.balance ?? '100000'}
          </span>
        </p>
      </div>
      <div>
        <p className='mt-5 flex flex-col gap-2'>
          <Tag>Request for Balance</Tag>
          <Tag>Request for Withdraw</Tag>
        </p>
      </div>
    </div>
  );
};
BalanceInformationCard.propTypes = {
  accountInfo: PropTypes.object.isRequired,
  title: PropTypes.string,
};
export default BalanceInformationCard;

import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';
import Tag from '../UI/Tag';
const initialBlur = {
  company: true,
  customers: true,
  companyBenefit: true,
};
const BalanceInformationCard = ({ title, accountInfo }) => {
  const [blur, setBlur] = useState({ ...initialBlur });
  const { userInfo } = useAuth();
  const axios = useAxios();
  // handle agent balance or withdraw request
  const handleBalanceRequest = async (type) => {
    try {
      const res = await axios.patch(`/agent/requestAdmin`, {
        phone: userInfo?.phone,
        requestType: type,
      });
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message ?? 'Request failed');
    }
  };
  return (
    <div
      onMouseLeave={() => setBlur({ ...initialBlur })}
      className='w-full rounded-lg border border-apple-500 bg-apple-50 p-5 md:w-1/2'
    >
      <h2 className='mb-4 text-center text-xl font-bold text-jagger-950'>
        {title ?? 'Balance Information'}
      </h2>
      {userInfo?.accountType === 'Admin' ? (
        <div>
          <p className='flex items-center gap-3 text-lg'>
            <span className='text-jagger-950'>
              <b className='flex'>
                <PiCurrencyCircleDollarFill className='text-2xl' /> Company
                Balance:
              </b>
            </span>
            <span
              className={`cursor-pointer transition-all duration-700 ${
                blur.company ? 'blur-sm' : 'blur-0'
              }`}
              onClick={() =>
                setBlur((prevState) => ({
                  ...prevState,
                  company: !blur.company,
                }))
              }
            >
              {accountInfo?.balance ?? '100000'}
            </span>
          </p>
          {/* all customers and agents total balance  */}
          <p className='flex items-center gap-3 text-lg'>
            <span className='text-jagger-950'>
              <b className='flex'>
                <PiCurrencyCircleDollarFill className='text-2xl' /> Cutomers
                Balance:
              </b>
            </span>
            <span
              className={`cursor-pointer transition-all duration-700 ${
                blur.customers ? 'blur-sm' : 'blur-0'
              }`}
              onClick={() =>
                setBlur((prevState) => ({
                  ...prevState,
                  customers: !blur.customers,
                }))
              }
            >
              {accountInfo?.balance ?? '100000'}
            </span>
          </p>
          {/* company benefit  */}
          <p className='flex items-center gap-3 text-lg'>
            <span className='text-jagger-950'>
              <b className='flex'>
                <PiCurrencyCircleDollarFill className='text-2xl' /> Company
                Benefit:
              </b>
            </span>
            <span
              className={`cursor-pointer transition-all duration-700 ${
                blur.companyBenefit ? 'blur-sm' : 'blur-0'
              }`}
              onClick={() =>
                setBlur((prevState) => ({
                  ...prevState,
                  companyBenefit: !blur.companyBenefit,
                }))
              }
            >
              {accountInfo?.balance ?? '100000'}
            </span>
          </p>
        </div>
      ) : (
        <div>
          <p className='flex items-center gap-3 text-lg'>
            <span className='text-jagger-950'>
              <b className='flex'>
                <PiCurrencyCircleDollarFill className='text-2xl' /> Balance:
              </b>
            </span>
            <span
              className={`cursor-pointer transition-all duration-700 ${
                blur.company ? 'blur-sm' : 'blur-0'
              }`}
              onClick={() =>
                setBlur((prevState) => ({
                  ...prevState,
                  company: !blur.company,
                }))
              }
            >
              {accountInfo?.balance ?? '100000'}
            </span>
          </p>
        </div>
      )}
      {userInfo?.role === 'Agent' && userInfo?.isActiveAccount && (
        <div>
          <p className='mt-5 flex flex-col gap-2'>
            <Tag onClick={() => handleBalanceRequest('isBalanceRequest')}>
              Request for Balance
            </Tag>
            <Tag onClick={() => handleBalanceRequest('isWithdrawRequest')}>
              Request for Withdraw
            </Tag>
          </p>
        </div>
      )}
    </div>
  );
};
BalanceInformationCard.propTypes = {
  accountInfo: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  title: PropTypes.string,
};
export default BalanceInformationCard;

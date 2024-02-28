import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import useAuth from '../../Hook/useAuth';
import useAxios from '../../Hook/useAxios';
import { servicesError } from '../../Utils/Error';
import GradientText from '../Shared/GradientText';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ServicesModal = ({ service, setSelectedService, accountRefetch }) => {
  const { loading, setLoading } = useAuth();
  const { userInfo } = useAuth();
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: servicesError,
    defaultValues: { senderPhone: userInfo?.phone },
  });
  const handleServiceRequest = async (data) => {
    try {
      setLoading(true);
      const { senderPhone, amount, receiverPhone, note, pin } = data;
      // send money request
      if (service === 'Send Money') {
        const sendmoneyRes = await axios.patch(`/user/account/sendmoney`, {
          phone: senderPhone,
          amount,
          receiverPhone,
          pin,
        });
        toast.success(sendmoneyRes.data.message);
        accountRefetch();
        // create transaction
        await axios.post(`/transactions/create`, {
          type: 'Send Money',
          amount: amount,
          senderName: userInfo?.name,
          senderNumber: senderPhone,
          receiverName: sendmoneyRes.data.receiverName,
          receiverNumber: receiverPhone,
          time: new Date(),
          wishText: note,
        });
      }
      // cashOut request
      if (service === 'Cash Out') {
        const cashOutRes = await axios.patch(`/user/account/cashout`, {
          agentPhone: receiverPhone,
          amount,
          phone: senderPhone,
          pin,
        });
        toast.success(cashOutRes.data.message);
        accountRefetch();
        // create transaction
        await axios.post(`/transactions/create`, {
          type: 'Cash Out',
          amount: amount,
          senderName: userInfo?.name,
          senderNumber: senderPhone,
          receiverName: cashOutRes.data.agentName,
          receiverNumber: receiverPhone,
          time: new Date(),
          wishText: note,
        });
      }
      // cashIn request
      if (service === 'Cash In') {
        const cashInRes = await axios.patch(`/agent/cashIn`, {
          phone: senderPhone,
          amount,
          receiverPhone,
          pin,
        });
        toast.success(cashInRes.data.message);
        accountRefetch();
        await axios.post(`/transactions/create`, {
          type: 'Cash In',
          amount: amount,
          senderName: userInfo?.name,
          senderNumber: senderPhone,
          receiverName: cashInRes.data.receiverName,
          receiverNumber: receiverPhone,
          time: new Date(),
          wishText: note,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='relative w-full rounded-lg border-2 border-apple-500 bg-white p-5 shadow-boxTransparentShadow sm:w-[640px]'>
      {/* modal close button */}
      <div onClick={() => setSelectedService('')}>
        <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-lg rounded-tr-lg bg-apple-100 text-2xl transition-all hover:bg-apple-200 active:bg-apple-300'>
          <RxCross2 />
        </span>
      </div>
      <GradientText>{service ?? 'Service Name'}</GradientText>
      <form className='space-y-4' onSubmit={handleSubmit(handleServiceRequest)}>
        <Input
          displayName={'Sender Phone:'}
          type={'tel'}
          name={'senderPhone'}
          id={'senderPhone'}
          placeholder={'Enter your phone number'}
          register={{ ...register('senderPhone', { required: true }) }}
          error={errors.senderPhone && errors.senderPhone.message}
          disabled
        />
        <Input
          displayName={'Amount:'}
          type={'number'}
          name={'amount'}
          id={'amount'}
          placeholder={'Enter the amount'}
          register={{ ...register('amount', { required: true }) }}
          error={errors.amount && errors.amount.message}
        />
        <Input
          displayName={'Receiver Phone:'}
          type={'tel'}
          name={'receiverPhone'}
          id={'receiverPhone'}
          placeholder={'Enter receiver phone number'}
          register={{ ...register('receiverPhone', { required: true }) }}
          error={errors.receiverPhone && errors.receiverPhone.message}
        />
        <Input
          displayName={'Pin:'}
          type={'password'}
          name={'pin'}
          id={'pin'}
          placeholder={'Enter your 5 digit pin'}
          register={{ ...register('pin', { required: true }) }}
          error={errors.pin && errors.pin.message}
        />
        <Input
          displayName={'Reference/Note:'}
          type={'text'}
          name={'note'}
          id={'note'}
          placeholder={'Enter your reference or note'}
          register={{ ...register('note') }}
        />
        <Button loading={loading}>{loading ? 'Sending' : 'Send Money'}</Button>
      </form>
    </div>
  );
};
ServicesModal.propTypes = {
  service: PropTypes.string,
  setSelectedService: PropTypes.func,
  accountRefetch: PropTypes.func,
};
export default ServicesModal;

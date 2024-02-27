import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { servicesError } from '../../Utils/Error';
import GradientText from '../Shared/GradientText';
import Button from '../UI/Button';
import Input from '../UI/Input';

const ServicesModal = ({ service, setSelectedService }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: servicesError });
  const handleServiceRequest = (data) => {
    console.log(data);
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
        <Button>Send Money</Button>
      </form>
    </div>
  );
};
ServicesModal.propTypes = {
  service: PropTypes.string,
  setSelectedService: PropTypes.func,
};
export default ServicesModal;

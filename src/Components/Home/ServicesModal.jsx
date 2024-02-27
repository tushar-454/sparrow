import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';
import GradientText from '../Shared/GradientText';
import Button from '../UI/Button';
import Input from '../UI/Input';
const ServicesModal = ({ service, setSelectedService }) => {
  return (
    <div className='shadow-boxTransparentShadow relative w-full rounded-lg border-2 border-apple-500 bg-white p-5 sm:w-[640px]'>
      {/* modal close button */}
      <div onClick={() => setSelectedService('')}>
        <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-lg rounded-tr-lg bg-apple-100 text-2xl transition-all hover:bg-apple-200 active:bg-apple-300'>
          <RxCross2 />
        </span>
      </div>
      <GradientText>{service ?? 'Service Name'}</GradientText>
      <form className='space-y-4'>
        <Input
          displayName={'Sender Phone:'}
          type={'number'}
          name={'senderPhone'}
          id={'senderPhone'}
          placeholder={'Enter your phone number'}
        />
        <Input
          displayName={'Amount:'}
          type={'number'}
          name={'amount'}
          id={'amount'}
          placeholder={'Enter the amount'}
        />
        <Input
          displayName={'Receiver Phone:'}
          type={'number'}
          name={'receiverPhone'}
          id={'receiverPhone'}
          placeholder={'Enter receiver phone number'}
        />
        <Input
          displayName={'Pin:'}
          type={'password'}
          name={'pin'}
          id={'pin'}
          placeholder={'Enter your 4 digit pin'}
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

import PropTypes from 'prop-types';
import sendmoney from '../../assets/sendmoney.svg';

const Feature = ({ feature }) => {
  return (
    <div className='flex w-24 flex-col items-center justify-center gap-2'>
      <img
        src={feature?.image ?? sendmoney}
        alt={feature?.name ?? 'Features Name'}
        className='h-20 w-20 rounded-lg bg-gradient-to-tl from-apple-700 to-apple-400 p-4'
      />
      <p className='text-center font-medium text-jagger-950'>
        {feature?.name ?? 'Features Name'}
      </p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.object,
};
export default Feature;

import PropTypes from 'prop-types';
import Feature from './Feature';

const Features = ({ title, features }) => {
  return (
    <div>
      <h1 className='text-2xl font-bold text-jagger-950'>
        {title ?? 'Features'}
      </h1>
      <div className='my-5 flex flex-wrap items-start gap-4'>
        {features?.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};
Features.propTypes = {
  title: PropTypes.string,
  features: PropTypes.array,
};
export default Features;

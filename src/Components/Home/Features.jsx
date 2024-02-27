import PropTypes from 'prop-types';
import { useState } from 'react';
import Feature from './Feature';
import ServicesModal from './ServicesModal';

const Features = ({ title, features }) => {
  const [selectedService, setSelectedService] = useState('');
  return (
    <div>
      <h1 className='text-2xl font-bold text-jagger-950'>
        {title ?? 'Features'}
      </h1>
      <div className='my-5 flex flex-wrap items-start gap-4'>
        {features?.map((feature, index) => (
          <Feature
            key={index}
            feature={feature}
            setSelectedService={setSelectedService}
          />
        ))}
      </div>
      {/* different features modal for user to interact with */}
      <div className='absolute left-1/2 top-80 z-50 flex w-11/12 -translate-x-1/2 -translate-y-1/2 justify-center'>
        {selectedService === 'Send Money' && (
          <ServicesModal
            service={'Send Money'}
            setSelectedService={setSelectedService}
          />
        )}
        {selectedService === 'Cash Out' && (
          <ServicesModal
            service={'Cash Out'}
            setSelectedService={setSelectedService}
          />
        )}
        {selectedService === 'Cash In' && (
          <ServicesModal
            service={'Cash In'}
            setSelectedService={setSelectedService}
          />
        )}
      </div>
    </div>
  );
};
Features.propTypes = {
  title: PropTypes.string,
  features: PropTypes.array,
};
export default Features;

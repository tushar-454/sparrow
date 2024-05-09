import donation from '../../Assets/Donation.svg';
import http from '../../Assets/HTTP.svg';
import iipp from '../../Assets/IIPP.svg';
import interestFree from '../../Assets/Interest-Free.svg';
import GradientText from '../Shared/GradientText';

const featuresLists = [
  {
    image: interestFree,
    title: 'Interest-Free',
    description:
      'Shariah-compliant Sparrow Islamic MFS Account is a completely Interest-Free solution.',
  },
  {
    image: donation,
    title: 'Donation',
    description:
      'Donate to Islamic organizations through Sparrow Islamic MFS Account',
  },
  {
    image: iipp,
    title: 'Islamic Insurance Premium Payment',
    description:
      'Pay premiums of various Islamic Insurance policies from Sparrow Islamic MFS Account',
  },
  {
    image: http,
    title: 'Hajj Tours & Travels Payment',
    description:
      'Make payment for Hajj Tours & Travels package through Sparrow Islamic MFS Account.',
  },
];

const Features = () => {
  return (
    <div className='my-20'>
      <GradientText>Features</GradientText>
      <div className='my-10 grid grid-cols-1 justify-center gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {featuresLists.map((feature, index) => (
          <div key={index} className='flex flex-col items-center gap-5'>
            <img
              src={feature.image}
              alt={feature.title}
              className='h-20 w-20 rounded-full bg-gray-100 object-cover p-2 grayscale transition-all hover:grayscale-0'
            />
            <div className='space-y-4'>
              <h3 className='text-center text-xl font-bold'>{feature.title}</h3>
              <p className='text-center '>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

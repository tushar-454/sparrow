import { useState } from 'react';
import stepImg from '../../Assets/step.png';
import GradientText from '../Shared/GradientText';

const steps = [
  {
    step: 'Go to Login Page First',
    description:
      'You have account already? Go to login page first. If not, then go to Signup page for create new account.',
  },
  {
    step: 'Signup with your mobile number',
    description:
      '1. Give nour name and related information 2. Take your National Identity Card ( NID) No. 3. Upload Photo 4. Set 5 Digit pin 5. Read terms and condition 6. Click on Signup button',
  },
  {
    step: 'Need active your account',
    description:
      'After crate an account first follow user information box see request active account and active your account. Then you can use your account.',
  },
  {
    step: 'Enjoy with Sparrow Service',
    description:
      'Now you can add money from agent and pay send money to other account. Enjoy with Sparrow Service.',
  },
];

const AccountGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <GradientText>Account creation Guide</GradientText>
      <div className='my-20 flex'>
        <div className='w-full md:w-1/2'>
          {steps.map((step, index) => (
            <div key={index} className='stepItem relative px-12 py-4'>
              <span
                onClick={() => setCurrentStep(--index)}
                className={`absolute left-0 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ${
                  currentStep === index
                    ? 'border-2 border-apple-500 bg-apple-500 text-white'
                    : 'border-2 border-[#dbdbdb] bg-white text-black'
                } p-2 transition-all`}
              >
                {++index}
              </span>
              <a
                href='#'
                className={`text-lg ${
                  currentStep + 1 === index ? 'font-bold' : 'font-medium'
                }`}
              >
                {step.step}
              </a>
              <p className=''>{step.description}</p>
            </div>
          ))}
        </div>
        <div className='w-full md:w-1/2'>
          <img src={stepImg} alt='stepImg' />
        </div>
      </div>
    </div>
  );
};

export default AccountGuide;

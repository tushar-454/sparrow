import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Logo from '../Components/Header/Logo';
import Button from '../Components/UI/Button';
import Checkbox from '../Components/UI/Checkbox';
import Input from '../Components/UI/Input';
import Select from '../Components/UI/Select';

const Register = () => {
  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-auto w-full max-w-md p-6 pt-10'>
        <div className='relative rounded-lg border-2 border-apple-700 bg-white shadow-sm'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              {/* back to home button  */}
              <Link to={'/'}>
                <span className='text-sun-900 absolute -right-0 -top-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-lg rounded-tr-lg bg-apple-100 text-2xl transition-all hover:bg-apple-200 active:bg-apple-300 active:text-white'>
                  <RxCross2 />
                </span>
              </Link>
              {/* MFS logo  */}
              <Logo center={true} />
              <h1 className='block text-2xl font-bold text-jagger-950 dark:text-white'>
                Register Now
              </h1>
              <p className='mt-2 text-sm text-jagger-950 dark:text-gray-400'>
                Have an account already?{' '}
                <Link
                  className='font-medium text-jagger-700 decoration-2 hover:underline'
                  to='/login'
                >
                  Login here
                </Link>
              </p>
            </div>
            {/* Register form will be here */}
            <form className='mt-10 space-y-5'>
              <Input
                displayName='Full Name:'
                type='text'
                id={'name'}
                name='name'
                placeholder={'Enter your full name'}
              />
              <Input
                displayName='Email Address:'
                type='email'
                id={'email'}
                name='email'
                placeholder={'Enter your email address'}
              />
              <Input
                displayName='Mobile Number:'
                type='tel'
                id={'phone'}
                name='phone'
                placeholder={'Enter your phone number'}
              />
              <Select label={'Account Type'} id={'accountType'}>
                <option value=''>Choose your account type</option>
                <option value='Customer'>Customer</option>
                <option value='Agent'>Agent</option>
              </Select>
              <Input
                displayName='Pin:'
                type='password'
                id={'pin'}
                name='pin'
                placeholder={'Enter your 4 digit pin'}
              />
              <Input
                displayName='Confirm Pin:'
                type='password'
                id={'confirmPin'}
                name='confirmPin'
                placeholder={'Confirm your pin'}
              />
              <Checkbox
                displayName={'I agree all terms & conditions'}
                type='checkbox'
                id={'terms'}
              />
              <Button>Create an account</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;

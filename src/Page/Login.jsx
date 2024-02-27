import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Logo from '../Components/Header/Logo';
import Button from '../Components/UI/Button';
import Input from '../Components/UI/Input';
import { loginError } from '../Utils/Error';
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: loginError });
  // handle login form submit
  const handleLoginForm = (data) => {
    console.log(data);
  };
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
                Login Now
              </h1>
              <p className='mt-2 text-sm text-jagger-950 dark:text-gray-400'>
                Don&apos;t have an account yet?{' '}
                <Link
                  className='font-medium text-jagger-700 decoration-2 hover:underline'
                  to='/register'
                >
                  Register Now
                </Link>
              </p>
            </div>
            {/* Login form will be here */}
            <form
              className='mt-10 space-y-5'
              onSubmit={handleSubmit(handleLoginForm)}
            >
              <Input
                displayName='Mobile Number / Email:'
                type='text'
                id={'emailOrPhone'}
                name='emailOrPhone'
                placeholder={'Enter your email or phone number'}
                register={{ ...register('emailOrPhone', { required: true }) }}
                error={errors.emailOrPhone && errors.emailOrPhone.message}
              />
              <Input
                displayName='Pin:'
                type='password'
                id={'pin'}
                name='pin'
                placeholder={'Enter your 4 digit pin'}
                isGroup={true}
                register={{
                  ...register('pin', { required: true }),
                }}
                error={errors.pin && errors.pin.message}
              />
              <Button>Login account</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

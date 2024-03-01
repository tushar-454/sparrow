import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Components/Header/Logo';
import Button from '../Components/UI/Button';
import Checkbox from '../Components/UI/Checkbox';
import Input from '../Components/UI/Input';
import Select from '../Components/UI/Select';
import useAuth from '../Hook/useAuth';
import useAxios from '../Hook/useAxios';
import { registerError } from '../Utils/Error';

const Register = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { loading, setLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: registerError });
  const handleRegisterForm = async (data) => {
    try {
      setLoading(true);
      const { name, email, phone, nidNo, pin, accountType } = data;
      // save user info
      const userInfoRes = await axios.post('/user/create', {
        name,
        email,
        phone,
        pin,
        role: accountType,
        nidNo,
      });
      // create an account
      const userAccountRes = await axios.post('/account/create', {
        name,
        email,
        phone,
        role: accountType,
      });
      if (userInfoRes.data.success && userAccountRes.data.success) {
        toast.success('Account created successfully');
        navigate('/login');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className='min-h-screen bg-white'>
      <div className='mx-auto w-full max-w-md p-6 pt-10'>
        <div className='relative rounded-lg border-2 border-apple-700 bg-white shadow-sm'>
          <div className='p-4 sm:p-7'>
            <div className='text-center'>
              {/* back to home button  */}
              <Link to={'/home'}>
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
            <form
              className='mt-10 space-y-5'
              onSubmit={handleSubmit(handleRegisterForm)}
            >
              <Input
                displayName='Full Name:'
                type='text'
                id={'name'}
                name='name'
                placeholder={'Enter your full name'}
                register={{ ...register('name', { required: true }) }}
                error={errors.name && errors.name.message}
              />
              <Input
                displayName='Email Address:'
                type='email'
                id={'email'}
                name='email'
                placeholder={'Enter your email address'}
                register={{ ...register('email', { required: true }) }}
                error={errors.email && errors.email.message}
              />
              <Input
                displayName='Mobile Number:'
                type='tel'
                id={'phone'}
                name='phone'
                placeholder={'Enter your phone number'}
                register={{ ...register('phone', { required: true }) }}
                error={errors.phone && errors.phone.message}
              />
              <Input
                displayName='NID No:'
                type='number'
                id={'nidNo'}
                name='nidNo'
                placeholder={'Enter your nidNo number'}
                register={{ ...register('nidNo', { required: true }) }}
                error={errors.nidNo && errors.nidNo.message}
              />
              <Select
                label={'Account Type'}
                id={'accountType'}
                register={{ ...register('accountType', { required: true }) }}
                error={errors.accountType && errors.accountType.message}
              >
                <option value=''>Choose your account type</option>
                <option value='Customer'>Customer</option>
                <option value='Agent'>Agent</option>
              </Select>
              <Input
                displayName='Pin:'
                type='password'
                id={'pin'}
                name='pin'
                placeholder={'Enter your 5 digit pin'}
                register={{
                  ...register('pin', { required: true }),
                }}
                error={errors.pin && errors.pin.message}
              />
              <Input
                displayName='Confirm Pin:'
                type='password'
                id={'confirmPin'}
                name='confirmPin'
                placeholder={'Confirm your pin'}
                register={{
                  ...register('confirmPin', { required: true }),
                }}
                error={errors.confirmPin && errors.confirmPin.message}
              />
              <Checkbox
                displayName={'I agree all terms & conditions'}
                type='checkbox'
                id={'terms'}
                name='terms'
                register={{
                  ...register('terms', { required: true }),
                }}
                error={errors.terms && toast.error(errors.terms.message)}
              />
              <Button loading={loading} disabled={loading ? true : false}>
                {loading ? 'Creating...' : 'Create an account'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;

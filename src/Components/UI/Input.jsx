import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Input = ({
  displayName,
  id,
  isGroup = false,
  error,
  register,
  ...rest
}) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <label
          htmlFor={id}
          className='mb-2 block text-sm font-semibold text-jagger-950'
        >
          {displayName}
        </label>
        {isGroup && (
          <Link
            className='mb-2 text-sm font-medium text-jagger-600 decoration-2 hover:underline'
            to={''}
          >
            Forgot Pin?
          </Link>
        )}
      </div>
      <div className='relative'>
        <input
          {...rest}
          {...register}
          id={id}
          className='block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-apple-500 focus:bg-apple-50'
        />
        {error && (
          <div className='pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3'>
            <MdError className='text-2xl text-red-500' />
          </div>
        )}
      </div>
      {error && (
        <p className='mt-2 text-xs text-red-600' id='password-error'>
          {error}
        </p>
      )}
    </div>
  );
};
Input.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  isGroup: PropTypes.bool,
  error: PropTypes.string,
};
export default Input;

import PropTypes from 'prop-types';
import { MdError } from 'react-icons/md';

const InputFile = ({ displayName, id, error, register, ...rest }) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <label
          htmlFor={id}
          className='focus:border-sun-500 focus:ring-sun-500 mb-2 block w-full cursor-pointer rounded-lg border border-gray-200 px-4 py-3 text-center text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:focus:ring-gray-600'
        >
          {displayName}
        </label>
      </div>
      <div className='relative'>
        <input
          {...rest}
          {...register}
          id={id}
          className='focus:border-sun-500 focus:ring-sun-500 hidden w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600'
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
InputFile.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.string,
};
export default InputFile;

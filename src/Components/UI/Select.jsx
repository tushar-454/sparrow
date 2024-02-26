import PropTypes from 'prop-types';

const Select = ({ label, id, register, error, children, ...rest }) => {
  return (
    <div className='w-full'>
      <label
        htmlFor={id}
        className='mb-2 block text-sm font-semibold text-jagger-950'
      >
        {label}
      </label>
      <div className='relative'>
        <select
          {...register}
          {...rest}
          id={id}
          className='block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-all focus:border-apple-500 focus:bg-apple-50'
        >
          {children}
        </select>
      </div>
      {error && (
        <p className='mt-2 text-xs text-red-600' id='password-error'>
          {error}
        </p>
      )}
    </div>
  );
};
Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Select;

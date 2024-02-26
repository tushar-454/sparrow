import PropTypes from 'prop-types';

const Checkbox = ({ displayName, id, register, ...rest }) => {
  return (
    <div className='flex items-center'>
      <div className='flex'>
        <input
          {...rest}
          {...register}
          id={id}
          className='pointer-events-none mt-0.5 shrink-0 rounded border-jagger-200 accent-apple-500'
        />
      </div>
      <div className='ms-3'>
        <label htmlFor={id} className='text-sm text-jagger-950'>
          {displayName}
        </label>
      </div>
    </div>
  );
};
Checkbox.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
};
export default Checkbox;

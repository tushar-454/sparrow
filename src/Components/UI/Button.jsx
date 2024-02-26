import PropTypes from 'prop-types';
const Button = ({ children, ...rest }) => {
  return (
    <div>
      <button
        {...rest}
        className='inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-apple-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-apple-600 active:bg-apple-700 disabled:cursor-not-allowed disabled:bg-apple-200 disabled:text-apple-700'
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;

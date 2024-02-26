import PropTypes from 'prop-types';

const Tag = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className='inline-block cursor-pointer rounded-full bg-gradient-to-l from-apple-700 to-apple-400 px-6 py-2 text-sm font-medium text-white transition-all hover:from-apple-700 hover:to-apple-500 active:from-apple-800 active:to-apple-600 disabled:cursor-not-allowed disabled:from-apple-300 disabled:to-apple-100 disabled:text-apple-700'
    >
      {children}
    </button>
  );
};
Tag.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Tag;

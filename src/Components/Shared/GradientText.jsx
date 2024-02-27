import PropTypes from 'prop-types';
const GradientText = ({ isHead = false, children }) => {
  return (
    <>
      {isHead ? (
        <h1 className='mt-8 bg-gradient-to-br from-apple-500 to-jagger-950 bg-clip-text text-center text-5xl font-bold text-transparent'>
          {children}
        </h1>
      ) : (
        <p className='my-5 bg-gradient-to-br from-apple-500 to-jagger-950 bg-clip-text text-center text-3xl font-bold text-transparent'>
          {children}
        </p>
      )}
    </>
  );
};
GradientText.propTypes = {
  isHead: PropTypes.bool,
  children: PropTypes.node,
};
export default GradientText;

import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className='mx-auto max-w-screen-2xl px-4 md:px-0'>{children}</div>
  );
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;

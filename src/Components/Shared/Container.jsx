import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className='mx-auto max-w-screen-xl px-4'>{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;

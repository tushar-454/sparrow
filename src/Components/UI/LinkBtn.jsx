import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkBtn = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='rounded-lg bg-white px-5 py-3 font-semibold text-apple-700 transition hover:bg-apple-50 active:scale-[0.98] active:bg-apple-100'
    >
      {children}
    </Link>
  );
};
LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default LinkBtn;

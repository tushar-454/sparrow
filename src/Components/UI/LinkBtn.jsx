import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkBtn = ({ to, children }) => {
  return (
    <Link
      to={to}
      className='rounded-lg bg-jagger-800 px-5 py-3 font-semibold text-white transition hover:bg-jagger-900 active:scale-[0.98]'
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
